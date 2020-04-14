// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import api from '../api';
export default class Home extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  pageName = 'about';
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
    await this.getBlogDesc();
  }
  getBlogDesc = async () => {
    await this.resHandler(
      () => this.getApi(api.getSetting + '/about'),
      (res) => {
        console.log('res', res);
        this.handleChangeState({ blogdesc: res.about });
      },
      (err) => {
        console.log('err', err);
      }
    );
  };
}
