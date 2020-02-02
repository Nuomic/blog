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
      <Card title={'个人介绍'} size="small" bordered={false}>
        {blogdesc.userDesc}
      </Card>
      <Card title={'博客介绍'} size="small" bordered={false}>
        {blogdesc.blogDesc}
      </Card>
      <Card title={'友情赞助'} size="small" bordered={false}>
        <div
          style={{
            width: 200,
            margin: '0 20px',
            display: 'inline-block',
            textAlign: 'center'
          }}
        >
          <img src={blogdesc.weChat} alt="" width="100%" />
          <span style={{ fontSize: 20 }}>微信</span>
        </div>{' '}
        <div
          style={{
            width: 200,
            margin: '0 20px',
            display: 'inline-block',
            textAlign: 'center'
          }}
        >
          <img src={blogdesc.alipay} alt="" width="100%" />
          <span style={{ fontSize: 20 }}>支付宝</span>
        </div>
      </Card>
    </BasicLayout>
  );
};
