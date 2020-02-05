import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import * as Model from './Model';
import api from '../api';
import { message } from 'antd';
export default class extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;
  async componentWillCreate() {
    // await super.componentWillCreate();
    await this.getFriendList();
  }
  async componentDidFirstMount() {
    // await super.componentDidFirstMount();
  }
  handleSaveFriend = async value => {
    console.log('value', value);
    await this.resHandler(
      () => this.postApi(api.saveFriend, value),
      res => {
        this.getFriendList(res);
        message.success('保存成功');
      },
      err => {
        console.log('err', err);
      }
    );
  };
  handleDeleteFriend = async friendId => {
    await this.resHandler(
      () => this.postApi(api.deleteFriend, { friendId }),
      res => {
        this.getFriendList(res);
        message.success('删除成功');
      },
      err => {
        console.log('err', err);
      }
    );
  };
  saveFriend;
  getFriendList = async () => {
    await this.resHandler(
      () => this.getApi(api.getFriend),
      res => {
        this.handleChangeState(res);
      },
      err => {
        console.log('err', err);
      }
    );
  };
}
