import React from 'react';
import BasicLayout from '../components/BasicLayout';
import Article from '../components/Article';
export default (props) => {
  console.log('props', props);
  const BreadcrumbList = [{ name: '首页', href: '/admin' }, { name: '作品集' }];
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      {/* <Article></Article> */}
    </BasicLayout>
  );
};
