// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import Model from './Model';
import api from '../api';
import { message } from 'antd';
export default class Home extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;
  // async getInitialState(initialState) {
  //   return {
  //     ...initialState,
  //     currentPath: this.location.pathname,
  //   };
  // }
  async componentWillCreate() {
    await this.handleGetResource();
  }

  handleGetResource = async () => {
    await this.resHandler(
      () => this.getApi(api.getResource),
      (res) => {
        this.handleChangeState(res);
        console.log('res', res);
      },
      (err) => {
        console.log('err', err);
      }
    );
  };
}
