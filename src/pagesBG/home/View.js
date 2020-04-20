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
      <Row gutter={18}>
        <Col xxl={16} md={24} lg={16}>
          <Total />
        </Col>
        <Col xxl={8} md={24} lg={8}>
          <ArticleCount />
        </Col>

        <Col span={24}>
          <PageView />
        </Col>
      </Row>
    </BasicLayout>
  );
};
