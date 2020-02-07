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
      console.log('Editor', Editor);
      this.handleChangeState({ Editor });
    }
  }
  async componentDidFirstMount() {}

  handleChangeModalStatus = () => {
    const { modalStatus } = this.store.getState();
    this.handleChangeState({ modalStatus: !modalStatus });
  };
  handleSaveArticle = async value => {
    await this.resHandler(
      () => this.postApi(api.saveArticle, value),
      () => {
        message.success('保存成功');
        this.handleChangeModalStatus();
      },
      err => {
        message.error('保存失败');
      }
    );
  };
}
