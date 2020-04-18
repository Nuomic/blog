// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import Model from './Model';
import api from '../api';
import { message } from 'antd';
export default class Home extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;

  async componentWillCreate() {
    await this.handleGetResource();
  }

  handleGetResource = async () => {
    await this.resHandler(
      () => this.getApi(api.getResource),
      (res) => {
        this.handleChangeState(res);
        console.log('res', res);
      },
      (err) => {
        console.log('err', err);
      }
    );
  };
  handleDeleteResource = async (resourceId) => {
    await this.resHandler(
      () => this.postApi(api.deleteResource, { resourceId }),
      (res) => {
        this.handleGetResource();
        // this.handleChangeState(res);
        message.success('删除成功');
        console.log('res');
      },
      (err) => {
        console.log('err', err);
      }
    );
  };
  handleChangeResourceStatus = async (args) => {
    await this.resHandler(
      () => this.postApi(api.changeResourceStatus, args),

      (res) => {
        this.handleGetResource();
        message.success('删除成功');
        console.log('res');
      },
      (err) => {
        console.log('err', err);
      }
    );
  };
}
