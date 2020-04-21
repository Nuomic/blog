// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import * as Model from './Model';
import api from '../api';
import { message } from 'antd';
export default class Home extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;
  async componentWillCreate() {
    await this.handleGetPortfolio();
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
  handleGetPortfolio = async () => {
    await this.resHandler(
      () => this.getApi(api.getPortfolio),
      (res) => {
        this.handleChangeState(res);
        console.log('res', res);
      },
      (err) => {
        console.log('err', err);
      }
    );
  };
  handleSavePortfolio = async (value) => {
    await this.resHandler(
      () => this.postApi(api.savePortfolio, value),
      (res) => {
        this.handleGetPortfolio();
        message.success('保存成功');
      },
      (err) => {
        console.log('err', err);
        message.error('保存失败');
      }
    );
  };
  handleDeletePortfolio = async (portfolioId) => {
    const { portfolioList = [] } = this.store.getState();
    await this.resHandler(
      () => this.post(api.deletePortfolio, { portfolioId }),
      (res) => {
        this.handleChangeState({
          portfolioList: portfolioList.filter((item) => item.id != portfolioId),
        });
        message.success('删除成功！');
      },
      (err) => {
        message.error(err.customerErrorMessage);
      }
    );
  };
}
