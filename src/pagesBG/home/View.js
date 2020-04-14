import React, { useRef, useEffect } from 'react';
import BasicLayout from '../components/BasicLayout';
import PageView from './components/PageView';
import { Row, Col } from 'antd';
import ArticleCount from './components/ArticleCount';
import Total from './components/Total';
export default ({ state }) => {
  console.log('state', state);
  const bdList = [{ name: '首页' }];

  return (
    <BasicLayout breadcrumbList={bdList}>
      <Row gutter={12}>
        <Col>
          <Total />
        </Col>
        <Col xxl={18} md={24} lg={16}>
          <PageView />
        </Col>
        <Col xxl={6} md={24} lg={8}>
          <ArticleCount />
        </Col>
      </Row>
    </BasicLayout>
  );
};
