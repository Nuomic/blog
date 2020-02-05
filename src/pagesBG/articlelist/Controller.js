// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import * as Model from './Model';
import api from '../api';
import { message } from 'antd';
export default class extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;
  // async getInitialState(initialState) {
  //   await super.getInitialState();
  //   return {
  //     ...initialState,
  //     currentPath: this.location.pathname
  //   };
  // }
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
      () => this.getApi(api.getArticleList),
      res => {
        this.handleChangeState(res);
      },
      err => {
        console.log('err', err);
      }
    );
  };
  //改变文章状态
  handleChangeArticleStatus = async (articleId, status) => {
    console.log('articleId', articleId);
    console.log('status', status);
    //参数为文章的id  改变之后的状态
    await this.resHandler(
      () => this.postApi(api.changeArticleStatus, { articleId, status }),
      () => {
        const { articleList } = this.store.getState();
        const newArticleList = articleList.map(item => {
          if (item.id == articleId) item.status = status;
          return item;
        });
        this.handleChangeState({ articleList: newArticleList });
        message.success('成功');
      },
      err => {
        console.log('err', err);
      }
    );
  };
  //删除文章
  handleDelete = async (articleId, status) => {
    if (status != 4 && status != 3)
      await this.handleChangeArticleStatus(articleId, 4);
    else
      await this.resHandler(
        () => this.postApi(api.deleteArticle, { articleId }),
        () => {
          this.getArticleList();
        },
        err => {
          console.log('err', err);
        }
      );
  };
}
