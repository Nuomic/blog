import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { Card } from 'antd';
import { Style } from 'react-imvc/component';
export default ({ state }) => {
  const { blogdesc } = state;
  console.log('blogdesc', blogdesc);
  const BreadcrumbList = [{ name: '首页', href: '/home' }, { name: '关于我' }];
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Style name="about" />
      <Card style={{ height: '100vh' }} title={'关于我'}>
        <div>
          关于我
          <div>{blogdesc.userDesc}</div>
        </div>
        <div>
          博客介绍
          <div>{blogdesc.blogDesc}</div>
        </div>
        <div>
          友情赞助
          <div>
            <img src={blogdesc.weChat} alt="" style={{ width: 200 }} />
            <img src={blogdesc.alipay} style={{ width: 200 }} alt="" />
          </div>
        </div>
      </Card>
    </BasicLayout>
  );
};
