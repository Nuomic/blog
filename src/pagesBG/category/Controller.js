import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import * as Model from './Model';
import api from '../api';
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
    await this.getCategory();
  }
  async componentDidFirstMount() {
    // await super.componentDidFirstMount();
  }
  //获取栏目列表
  getCategory = async () => {
    await this.resHandler(
      () => this.postApi(api.getCategory),
      res => {
        this.handleChangeState(res);
      },
      err => {
        console.log('err', err);
      }
    );
  };
  //删除栏目
  handleDeleteCategory = async categoryId => {
    await this.resHandler(
      () => this.postApi(api.deleteCategory, { categoryId }),
      () => {
        const { categoryList } = this.store.getState();
        const newCategoryList = categoryList.filter(
          item => item.id != categoryId
        );
        this.handleChangeState({ categoryList: newCategoryList });
      },
      err => {
        console.log('err', err);
      }
    );
  };
  //保存栏目
  handleSaveCategory = async (category, handelModalStatus) => {
    console.log('category', category);
    await this.resHandler(
      () => this.postApi(api.saveCategory, category),
      res => {
        const { categoryList } = this.store.getState();
        let newCategoryList = categoryList;
        if (category.id) {
          newCategoryList = categoryList.map(item => {
            if (item.id == category.id) item = category;
            return item;
          });
        } else {
          newCategoryList.unshift({ ...category, ...res, articleCount: 0 });
        }
        console.log(categoryList);
        this.handleChangeState({ categoryList: newCategoryList });
        handelModalStatus();
      },
      err => {
        console.log('err', err);
      }
    );
  };
  //获取文章列表
  getArticleList = async categoryId => {
    await this.resHandler(
      () => this.postApi(api.getArticleList, { categoryId }),
      res => {
        this.handleChangeState(res);
      },
      err => {
        console.log('err', err);
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
