import React, { useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import Comments from '../components/Comments';
export default props => {
  console.log('props', props);
  const BreadcrumbList = [{ name: '首页', href: '/home' }, { name: '留言板' }];
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Comments />
    </BasicLayout>
  );
};
