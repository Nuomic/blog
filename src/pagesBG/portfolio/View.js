import React, { useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import { Tabs, Modal, Icon, Button } from 'antd';
import Form from './components/Form';
import List from './components/List';

export default () => {
  const bdList = [{ name: '首页', href: '/admin' }, { name: '作品管理' }];
  const [modalStatus, setModalStatus] = useState(false);
  const [currentValue, setCurrentValue] = useState({});
  //配置状态
  const changModalStatus = (value) => {
    setCurrentValue(value);
    setModalStatus(!modalStatus);
  };
  return (
    <BasicLayout breadcrumbList={bdList}>
      <Button type="primary" onClick={() => changModalStatus({})}>
        <Icon type="plus" />
        新增
      </Button>
      <List {...{ /* currentValue, modalStatus, */ changModalStatus }} />
      <Form {...{ currentValue, modalStatus, changModalStatus }} />
    </BasicLayout>
  );
};
