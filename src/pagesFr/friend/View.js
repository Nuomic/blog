import React from 'react';
import BasicLayout from '../components/BasicLayout';
import Form from './components/Form';
import Description from './components/Description';
import Links from './components/Links';
import { Card, Divider, Icon } from 'antd';
export default (props) => {
  console.log('props', props);
  const BreadcrumbList = [{ name: '首页', href: '/home' }, { name: '邻居' }];
  const Template = ({ title, icon, children }) => (
    <div style={{ padding: '10px 0' }}>
      <Icon type={icon} />
      <span style={{ margin: '0 5px' }}> {title}</span>
      <Divider style={{ margin: '10px 0' }} />
      {children}
    </div>
  );
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Card>
        <Template title="所有链接" icon="paper-clip">
          <Links />
        </Template>
        <Template title="申请说明" icon="notification">
          <Description />
        </Template>
        <Template title="申请友链" icon="form">
          <Form />
        </Template>
      </Card>
    </BasicLayout>
  );
};
