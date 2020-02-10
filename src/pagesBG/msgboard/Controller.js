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
  //   return {
  //     ...state,
  //     currentPath: this.location.pathname
  //   };
  // }
  async componentWillCreate() {
    // await super.componentWillCreate();
    await this.getCommentList();
  }
  async componentDidFirstMount() {
    // await super.componentDidFirstMount();
  }
  //获取评论列表
  getCommentList = async () => {
    await this.resHandler(
      () => this.getApi(api.getCommentList, { all: true }),
      res => {
        this.handleChangeState(res);
      },
      err => {
        message.error('ssssssssssss');
      }
    );
  };

  handleSaveComment = async value => {
    await this.resHandler(
      () => this.postApi(api.saveComment, value),
      res => {
        console.log('res', res);
        this.getCommentList();
        message.success('回复成功');
      },
      err => {
        console.log('err', err);
      }
    );
  };
  //删除评论
  handleDeleteComment = async commentId => {
    await this.resHandler(
      () => this.postApi(api.deleteComment, { commentId }),
      () => {
        this.getCommentList();
      },
      err => {
        message.error('删除评论失败');
      }
    );
  };
}
