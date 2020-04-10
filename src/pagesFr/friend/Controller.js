// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import { message } from 'antd';
import View from './View';
import api from '../api';
export default class Home extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  preload = {
    ...this.preload,
  };
  async getInitialState(initialState) {
    return {
      ...initialState,
      currentPath: this.location.pathname,
    };
  }
  async componentWillCreate() {
    await super.componentWillCreate();
  }

  handleSaveFriend = async (value) => {
    await this.resHandler(
      () => this.postApi(api.saveFriend, value),
      (res) => {
        message.success('申请成功，请等待博主审核。');
      },
      (err) => {
        console.log('err', err);
      }
    );
  };
}
