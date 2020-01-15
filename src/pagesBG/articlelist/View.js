import React from 'react';
import BasicLayout from '../components/BasicLayout';
export default () => {
  const bdList = [
    { name: '首页', href: '/' },
    { name: '文章管理', href: '/articlemng' }
  ];
  return <BasicLayout breadcrumbList={bdList}></BasicLayout>;
};
