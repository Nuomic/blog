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
  //   const state = await super.getInitialState(initialState);
  //   console.log('state', state);
  //   return {
  //     ...state,
  //     currentPath: this.location.pathname
  //   };
  // }
  async componentWillCreate() {
    // await super.componentWillCreate();
    await this.getCategory();
  }
  async componentDidFirstMount() {
    // await super.componentDidFirstMount();
  }
  //获取栏目列表
  getCategory = async () => {
    await this.resHandler(
      () => this.getApi(api.getCategory),
      res => {
        this.handleChangeState(res);
      },
      err => {
        console.log('err', err);
      }
    );
  };
  //删除栏目
  handleDeleteCategory = async ({ id, articleCount }) => {
    console.log(id, articleCount);
    await this.resHandler(
      () => this.postApi(api.deleteCategory, { categoryId: id, articleCount }),
      () => {
        const { categoryList } = this.store.getState();
        const newCategoryList = categoryList.filter(item => item.id != id);
        this.handleChangeState({ categoryList: newCategoryList });
        message.success('删除成功！');
      },
      err => {
        message.error(err.customerErrorMessage);
      }
    );
  };
  //保存栏目
  handleSaveCategory = async (category, handelModalStatus) => {
    console.log('category', category);
    await this.resHandler(
      () => this.postApi(api.saveCategory, category),
      () => {
        this.getCategory();
        handelModalStatus();
      },
      err => {
        console.log('err', err);
      }
    );
  };
  //获取文章列表
  handleGetArticleList = async (categoryId, setArticleList) => {
    await this.resHandler(
      () => this.getApi(api.getArticleList, { categoryId }),
      res => {
        setArticleList(res.articleList);
      },
      err => {
        console.log('err', err);
      }
    );
  };
  //改变文章所属栏目
  handleChangeArticleListFromCategory = async (
    articleIds,
    toCategoryId,
    callback
  ) => {
    articleIds = articleIds.join(',');
    console.log('articleIds', articleIds);
    await this.resHandler(
      () => this.postApi(api.changeArticleStatus, { articleIds, toCategoryId }),
      () => {
        message.success('成功');
        callback();
        this.getCategory();
      },
      err => {
        message.error(err.customerErrorMessage);
      }
    );
  };
  //删除文章
  handleDelete = async (id, status) => {
    await this.resHandler(
      () => this.postApi(api.deleteArticle, { id, status }),
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
