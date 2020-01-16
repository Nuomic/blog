import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { StickyContainer, Sticky } from 'react-sticky';
import { Table, Tabs, List, Icon } from 'antd';
const { TabPane } = Tabs;
export default () => {
  const bdList = [{ name: '首页', href: '/admin' }, { name: '分类管理' }];
  return <BasicLayout breadcrumbList={bdList}></BasicLayout>;
};
