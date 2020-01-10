import React, { useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import Comment from '../components/Comment';
export default props => {
  console.log('props', props);
  const BreadcrumbList = [{ name: 'home', href: '/home' }, { name: '留言板' }];
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Comment></Comment>
    </BasicLayout>
  );
};
