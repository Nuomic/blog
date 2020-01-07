import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { Card } from 'antd';
import { Style } from 'react-imvc/component';
export default props => {
  console.log('props', props);
  const BreadcrumbList = [{ name: 'home', href: '/home' }, { name: 'blog' }];
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Style name="about" />
      <Card
        style={{ height: '100vh', marginRight: 10 }}
        title={'关于我'}
      ></Card>
    </BasicLayout>
  );
};
