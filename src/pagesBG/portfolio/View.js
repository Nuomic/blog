import React from 'react';
import BasicLayout from '../components/BasicLayout';
import StickyTabs from '../components/StickyTabs';
import { useModelState, useCtrl } from 'react-imvc/hook';
import { Tabs, Modal, Icon, Button } from 'antd';
import FileUpload from './components/FileUpload';
import FileItem from './components/FileItem';
const { TabPane } = Tabs;
const { confirm } = Modal;
export default () => {
  // const { portfolioList = [] } = useModelState();
  // const {} = useCtrl();
  const bdList = [{ name: '首页', href: '/admin' }, { name: '作品管理' }];
  //配置状态

  return <BasicLayout breadcrumbList={bdList}>444444</BasicLayout>;
};
