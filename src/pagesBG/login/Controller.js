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
  preload = {
    ...this.preload,
    login: '/css/login.css'
  };
  // async getInitialState(initialState) {
  //   await super.getInitialState();
  //   return {
  //     ...initialState,
  //     currentPath: this.location.pathname
  //   };
  // }
  async componentWillCreate() {
    // await super.componentWillCreate();
    // await this.getCommentList();
  }
  async componentDidFirstMount() {
    // await super.componentDidFirstMount();
  }
  handleLogin = async info => {
    this.resHandler(
      () => this.postApi(api.userLogin, info),
      res => {
        if (res.success) {
          this.handleChangeState(res);
          this.redirect('/admin');
          window.localStorage.setItem('TOKEN', res.TOKEN);
        } else {
          message.error(res.error);
        }
      },
      err => {
        console.log('err', err);
      }
    );
  };
}
