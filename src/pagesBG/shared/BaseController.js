import Controller from 'react-imvc/controller';
import * as sharedActions from './sharedActions';
import { message } from 'antd';
import api from '../api';
import querystring from 'querystring';
import Cookie from 'js-cookie';
export default class extends Controller {
  SSR = this.location.query.ssr != 0;
  preload = {
    antd: '/css/antd.min.css',
    antdPro: '/css/ant-design-pro.css',
    customize: '/css/customize.css',
    commonBG: '/css/commonBG.css',
  };

  /**
   * 动态获取初始化状态
   */
  async getInitialState(initialState) {
    let { context, location } = this;
    let userInfo = await this.getUserInfo();
    if (!Cookie.get('collapsed')) Cookie.set('collapsed', false);
    console.log('Cookie.get(collapsed)', Cookie.get('collapsed'));
    return {
      ...initialState,
      currentPath: location.pathname,
      initCollapsed: Cookie.get('collapsed') == 'false' ? false : true,
      userInfo: userInfo || {},
    };
  }

  async getUserInfo() {
    let { context } = this;
    // 获取登录用户信息，将用户信息缓存在 context 里，所有页面都可以共享访问
    console.log('context', context);
    let userInfo = null;
    try {
      if (context.hasOwnProperty('userInfo')) {
        userInfo = context.userInfo;
        console.log('userInfo', userInfo);
      } else {
        await this.resHandler(
          () => this.getApi(api.userCheck),
          (res) => {
            context.userInfo = res.userInfo;
            userInfo = res.userInfo;
          },
          () => {
            context.userInfo = null;
            message.error('登录过期');
          }
        );
      }
    } catch (_) {
      console.log('_', _);
    }

    return userInfo;
  }
  handleLogout = async () => {
    try {
      await this.resHandler(
        () => this.postApi(api.userLogout),
        (res) => {
          console.log('this.context', res);
        },
        (err) => {
          message.error(err.customerErrorMessage);
        }
      );
    } catch (_) {
      console.log('_', _);
      this.redirect('/login');
    }
  };
  /**
   * 动态获取最终的 actions 集合
   */
  getFinalActions(actions) {
    return {
      ...sharedActions,
      ...actions,
    };
  }

  /** 对fetch接口封装一次 方便调用*/
  postApi(url, data = {}, options = {}) {
    options = {
      method: 'POST',
      credentials: 'include',
      ...options,
      body: JSON.stringify(data),
    };
    return this.fetch(url, options);
  }
  formDataApi(url, data = {}, option = {}) {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        formData.append(key, element);
      }
    }
    const options = {
      method: 'POST',
      credentials: 'include',
      ...option,
      body: data,
    };
    return fetch(url, options);
  }
  getApi(url, params, options = {}) {
    options = {
      method: 'GET',
      credentials: 'include',
      ...options,
    };

    return this.fetch(
      url + (params ? `?${querystring.stringify(params)}` : ''),
      options
    );
  }
  handleChangeState(date) {
    const { updateMergeState } = this.store.actions;
    updateMergeState(date);
  }
  /**
   * 请求结构处理
   * @method resHandler
   * @param {Function} func : api接口配置
   * @param {Function} success : 成功回调
   * @param {Function} fail : 失败回调
   * @param {Number} options.limit : 请求失败重试开关，调用方可根据实际场景设置失败后重试次数，默认1不重试
   * @param {String} options.name : 自定义埋点名称
   */
  async resHandler(func, success, fail, options = {}) {
    let { limit = 1, name = '' } = options;
    console.log('this.context', this.context);
    console.log('this.contextlocation.pathname', this.location.pathname);
    if (limit < 1) {
      // this.recordLog({...options,errcode:3001},{ctripUid});
      message.error(`网络出错，请再试试吧。`);
      return;
    }
    try {
      let res = await func();

      const { ResponseStatus, returnStatus, ...data } = res;
      if (ResponseStatus.Ack == 'Success') {
        if (returnStatus.isSuccess === true) {
          return success(data);
        } else {
          // this.recordLog({...options,respdata:res},{ctripUid})
          return fail(res.returnStatus);
        }
      } else {
        if (res.ResponseStatus.ErrorCode == '401') {
          delete this.context.userInfo;
          this.redirect('/login');
          return;
        }
        message.error(`网络出错，请再试试吧。`);
      }
    } catch (e) {
      console.log(
        name,
        '***************请求异常****************',
        e.toString()
      );
      // this.recordLog(options,{ctripUid});
      this.resHandler(func, success, fail, { limit: limit - 1 });
    }
  }
}
