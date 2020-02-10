import React, { useState, useEffect } from 'react';
import BasicLayout from '../components/BasicLayout';
import Comments from '../components/Comments';
import { Spin } from 'antd';
export default props => {
  console.log('props', props);
  const BreadcrumbList = [{ name: '首页', href: '/home' }, { name: '留言板' }];
  useEffect(() => {
    setLoading(false);
  }, []);
  const [loading, setLoading] = useState(true);
  console.log('loading', loading);
  return (
    <Spin spinning={loading} delay={10}>
      <BasicLayout BreadcrumbList={BreadcrumbList}>
        <Comments />
      </BasicLayout>{' '}
    </Spin>
  );
};
