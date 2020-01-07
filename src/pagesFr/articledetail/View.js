import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { Card } from 'antd';
export default props => {
  console.log('props', props);
  const BreadcrumbList = [{ name: 'home', href: '/home' }, { name: 'blog' }];
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Card
        style={{ marginRight: 10 }}
        title={
          <div style={{ textAlign: 'center' }}>
            <p>详情页</p>
            <p>Dean 博文,工作笔记 二维码阅读 2019-11-21 14:08</p>
          </div>
        }
      >
        爱神的箭熬时间按时覅哦啊接是覅健身房个案件覅房间爱哦房间爱哦发觉怕死哦房间爱搜非建安发票福建奥飞交付件奥法
      </Card>
      <Card style={{ marginRight: 10 }} size="small">
        上一篇 下一篇
      </Card>
      <Card style={{ marginRight: 10 }} size="small">
        评论
      </Card>
    </BasicLayout>
  );
};
