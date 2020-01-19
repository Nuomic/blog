import React from 'react';
import BasicLayout from '../components/BasicLayout';
import StickyTabs from '../components/StickyTabs';
import { Tabs, Modal } from 'antd';
const { confirm } = Modal;
const { TabPane } = Tabs;
export default ({ state }) => {
  const bdList = [{ name: '首页', href: '/admin' }, { name: '留言管理' }];
  const articleStatus = [
    { tabName: '评论管理', key: '0' },
    { tabName: '留言管理', key: '1' }
  ];
  console.log('state', state);
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
