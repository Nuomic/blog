import React from 'react';
import BasicLayout from '../components/BasicLayout';
import StickyTabs from '../components/StickyTabs';
import { Tabs, Modal } from 'antd';
const { confirm } = Modal;
const { TabPane } = Tabs;
export default () => {
  const bdList = [{ name: '首页', href: '/admin' }, { name: '资源管理' }];
  const articleStatus = [
    { tabName: '全部', key: '0' },
    { tabName: '公开', key: '1' },
    { tabName: '私密', key: '2' },
    { tabName: '草稿箱', key: '3' },
    { tabName: '回收站', key: '4' }
  ];
  return (
    <BasicLayout breadcrumbList={bdList}>
      <StickyTabs>
        {articleStatus &&
          articleStatus.map(item => (
            <TabPane
              tab={item.tabName /* + ` (${ArticleList(item.key).length})` */}
              key={item.key}
            >
              item.tabName
            </TabPane>
          ))}
      </StickyTabs>
    </BasicLayout>
  );
};
