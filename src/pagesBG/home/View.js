import React, { useRef, useEffect } from 'react';
import BasicLayout from '../components/BasicLayout';
import PageView from './components/PageView';
import { Row, Col } from 'antd';
export default ({ state }) => {
  console.log('state', state);
  const bdList = [{ name: '首页' }];

  return (
    <BasicLayout breadcrumbList={bdList}>
      {`首页 // 站点监控 站点总览 站点统计`}
      <Row>
        <Col lg={18} xs={24}>
          <PageView />
        </Col>
      </Row>
    </BasicLayout>
  );
};
