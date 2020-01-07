import React from 'react';
import { Row, Col } from 'antd';
import BasicLayout from '../components/BasicLayout';
import Carousel from './components/Carousel';
import { Style } from 'react-imvc/component';
import Sider from '../components/Sider';
import Article from '../components/Article';
export default props => {
  console.log('props', props);
  const BreadcrumbList = [{ name: 'home', href: '/home' }, { name: '博文' }];
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Article
        style={{
          paddingLeft: 0,
          marginTop: 10
        }}
      ></Article>
    </BasicLayout>
  );
};
