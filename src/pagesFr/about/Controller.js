// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import api from '../api';
export default class Home extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  preload = {
    ...this.preload
  };
  async componentWillCreate() {
    await super.componentWillCreate();
    await this.getBlogDesc();
  }
  getBlogDesc = async () => {
    await this.resHandler(
      () => this.getApi(api.getBlogDesc),
      res => {
        console.log('res', res);
        this.handleChangeState(res);
      },
      err => {
        console.log('err', err);
      }
    );
  };
}
