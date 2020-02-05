// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import api from '../api';
import View from './View';
import * as Model from './Model';
export default class extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;
  async getInitialState(initialState) {
    return {
      ...initialState,
      currentPath: this.location.pathname
    };
  }
  async componentWillCreate() {
    await super.componentWillCreate();
    await this.getArticleList();
  }
  async componentDidFirstMount() {
    // await super.componentDidFirstMount();
  }
  getArticleList = async () => {
    await this.resHandler(
      () => this.getApi(api.getArticleList),
      res => {
        this.handleChangeState(res);
        console.log('res', res);
      },
      res => {
        console.log('res', res);
      }
    );
  };
}
