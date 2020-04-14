// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import * as Model from './Model';
import api from '../api';
export default class extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;
  SSR = false;
  // async getInitialState(initialState) {
  //   const state = await super.getInitialState(initialState);
  //   return {
  //     ...state,
  //     currentPath: this.location.pathname
  //   };
  // }
  async componentWillCreate() {
    // await super.componentWillCreate();
    // await this.getArticleList();
    if (this.context.isClient) {
      let g2plot = await import('@antv/g2plot');
      this.handleChangeState({ g2plot });
    }
    await this.getpageList();
  }
  // async componentDidFirstMount() {}
  //获取文章列表
  getpageList = async () => {
    await this.resHandler(
      () => this.getApi(api.getPageView),
      (res) => {
        console.log('res', res);
        this.handleChangeState(res);
      },
      (res) => {
        console.log('res', res);
      }
    );
  };
}
