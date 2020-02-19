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
    commonBG: '/css/commonBG.css'
  };

  /**
   * 动态获取初始化状态
   */
  async getInitialState(initialState) {
    let { context, location } = this;
    let userInfo = await this.getUserInfo();
    if (!Cookie.get('collapsed')) Cookie.set('collapsed', false);
    return {
      ...initialState,
      currentPath: location.pathname,
      initCollapsed: Cookie.get('collapsed') == 'false' ? false : true,
      ...userInfo
    };
  }

  async getUserInfo() {
    let { context } = this;
    // 获取登录用户信息，将用户信息缓存在 context 里，所有页面都可以共享访问
    let userInfo = null;
    try {
      if (context.hasOwnProperty('userInfo')) {
        userInfo = context.userInfo;
      } else {
        await await this.resHandler(
          () => this.getApi(api.userCheck),
          userInfo => {
            console.log('userInfo', userInfo);
            context.userInfo = userInfo;
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
  async handleLogout() {
    await this.resHandler(
      () => this.post(api.userLogout),
      () => {},
      err => {
        message.error(err.customerErrorMessage);
      }
    );
  }
  /**
   * 动态获取最终的 actions 集合
   */
  getFinalActions(actions) {
    return {
      ...sharedActions,
      ...actions
    };
  }

  /** 对fetch接口封装一次 方便调用*/
  postApi(url, data = {}, options = {}) {
    options = {
      method: 'POST',
      credentials: 'include',
      ...options,
      body: JSON.stringify(data)
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
      body: data
    };
    return fetch(url, options);
  }
  getApi(url, params, options = {}) {
    options = {
      method: 'GET',
      credentials: 'include',
      ...options
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
          this.redirect('/login');
          return;
        }
        // if (res.ResponseStatus.Errors[0].ErrorCode == '401') {
        //   redirect(this.context, '/v2/authorized/403');
        //   return;
        // }
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

  // getKeyTranlate(key, options = {}) {
  //   const language = this.store.getState().language || {};
  //   return language[key] ? language[key].replace(/\$\{\s*(\w+)\s*(([\+\-])\s*(\d+)\s*)?\}/g, (text) => options[text.substring(2, text.length - 1)]) : '';
  // }
  // logout() {
  //   let logoutTips = '确定退出系统？';
  //   try {
  //     logoutTips = this.store.getState().language.logoutTips || '确定退出系统？';
  //   } catch (error) {

  //   }
  //   Modal.confirm({ content: logoutTips, onOk: () => super.logout() });
  // }
}
