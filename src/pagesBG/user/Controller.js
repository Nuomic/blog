import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import * as Model from './Model';
import api from '../api';
import { message } from 'antd';
export default class extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;
  async componentWillCreate() {
    // await super.componentWillCreate();
  }
  async componentDidFirstMount() {
    // await super.componentDidFirstMount();
  }
  handelGetSetting = async (type, fun) => {
    await this.resHandler(
      () => this.get(api.getSetting + '/' + type),
      res => {
        fun(res[type]);
        // this.handleChangeState({ [type]: res.data });
      },
      err => {
        console.log('err', err);
      }
    );
  };
  handleSaveSetting = async (type, value) => {
    await this.resHandler(
      () => this.postApi(api.saveSetting, { type, ...value }),
      () => {
        message.success('保存成功');
      },
      () => {
        message.success('保存失败');
        // console.log('err', err);
      }
    );
  };
}
