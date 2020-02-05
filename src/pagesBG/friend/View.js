import React from 'react';
import BasicLayout from '../components/BasicLayout';
import StickyTabs from '../components/StickyTabs';
import { Tabs, Modal } from 'antd';
const { confirm } = Modal;
const { TabPane } = Tabs;
export default () => {
  const bdList = [{ name: '首页', href: '/admin' }, { name: '有情链接' }];
  const articleStatus = [
    { tabName: '已审核', key: '0' },
    { tabName: '待审核', key: '1' }
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
