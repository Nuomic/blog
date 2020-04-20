// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import { Modal } from 'antd';
import View from './View';
import api from '../api';
export default class Home extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  pageName = 'friend';

  async componentWillCreate() {
    await super.componentWillCreate();
  }

  handleSaveFriend = async (value) => {
    await this.resHandler(
      () => this.postApi(api.saveFriend, value),
      (res) => {
        Modal.success({
          content: '申请成功，请等待博主审核。',
        });
      },
      (err) => {
        console.log('err', err);
      }
    );
  };
}
