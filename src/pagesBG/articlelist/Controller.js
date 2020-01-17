// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import * as Model from './Model';
import api from '../api';
import _ from 'lodash';
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
    // await super.componentWillCreate();
    await this.getArticleList();
  }
  async componentDidFirstMount() {
    // await super.componentDidFirstMount();
  }

  //获取文章列表
  getArticleList = async () => {
    await this.resHandler(
      () => this.postApi(api.getArticleList),
      res => {
        this.handleChangeState(res);
      },
      res => {
        console.log('res', res);
      }
    );
  };
  //删除文章
  handleDelete = async (id, status) => {
    await this.resHandler(
      () => this.postApi(api.deleteArticle, { status }),
      () => {
        const { articleList } = this.store.getState();
        const newArticleList = articleList.filter(item => {
          if (item.status != 4 && item.status != 3 && item.id == id) {
            item.status = 4;
            return true;
          } else return item.id != id;
        });
        this.handleChangeState({ articleList: newArticleList });
      },
      err => {
        console.log('err', err);
      }
    );
  };
}
