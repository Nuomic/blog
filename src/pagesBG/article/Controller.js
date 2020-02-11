import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器

import View from './View';
import * as Model from './Model';
import api from '../api';
import { message } from 'antd';
export default class extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;
  SSR = false;
  async componentWillCreate() {
    if (this.context.isClient) {
      let Editor = await import('for-editor');
      this.handleChangeState({ Editor });
    }
    const articleId = this.location.params.articleId;
    if (articleId) {
      await this.getArticle(articleId);
    }
  }
  async componentDidFirstMount() {
    await this.getFormData('1,2');
  }
  getArticle = async articleId => {
    await this.resHandler(
      () => this.getApi(api.getArticleList, { articleId }),
      res => {
        this.handleChangeState(res);
      },
      err => {
        message.error('获取文章详情值失败');
      }
    );
  };

  handleChangeModalStatus = () => {
    const { modalStatus } = this.store.getState();
    this.handleChangeState({ modalStatus: !modalStatus });
  };
  getFormData = async type => {
    await this.resHandler(
      () => this.getApi(api.getFormData, { type }),
      res => {
        this.handleChangeState(res);
      },
      err => {
        message.error('获取表单值失败');
      }
    );
  };
  handleSaveArticle = async value => {
    const { article, modalStatus } = this.store.getState();

    value =
      (!!article && { id: article.id, status: article.status, ...value }) ||
      value;
    await this.resHandler(
      () => this.postApi(api.saveArticle, value),
      res => {
        message.success(
          (value.status == '3' && '成功保存到草稿箱') || '保存成功'
        );
        this.handleChangeState(res);
        modalStatus && this.handleChangeModalStatus();
      },
      err => {
        message.error('保存失败');
      }
    );
  };
  handleSaveTag = async value => {
    await this.resHandler(
      () => this.postApi(api.saveTag, { name: value }),
      res => {
        message.success('新增标签成功');
        this.getFormData('1,2');
      },
      err => {
        message.error('新增标签失败');
      }
    );
  };
}
