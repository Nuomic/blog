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
  async getInitialState(initialState) {
    return {
      ...initialState,
      currentPath: this.location.pathname
    };
  }
  async componentWillCreate() {
    await super.componentWillCreate();
    await this.handleGetCommentList();
    await this.getHitokoto();
  }
  async componentDidFirstMount() {
    // await super.componentDidFirstMount();
  }
  handleGetCommentList = async () => {
    await this.resHandler(
      () => this.getApi(api.getCommentList),
      res => {
        console.log('res', res);
        this.handleChangeState(res);
      },
      res => {
        console.log('res', res);
      }
    );
  };
  handleSaveCommit = async value => {
    console.log('value', value);
    await this.resHandler(
      () => this.post(api.saveComment, value),
      res => {
        console.log('res', res);
        this.handleChangeState(res);
        this.handleGetCommentList();
      },
      err => {
        message.error('保存失败');
      }
    );
  };
  getHitokoto = async () => {
    let res = await this.getApi(api.getHitokoto);
    this.handleChangeState({ hitokoto: res });
  };
}
