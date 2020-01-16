import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { StickyContainer, Sticky } from 'react-sticky';
import { Table, Tabs } from 'antd';
const { TabPane } = Tabs;
export default ({ state }) => {
  const bdList = [
    { name: '首页', href: '/admin' },
    { name: '文章管理', href: '/articlemng' }
  ];
  const { articleList } = state;
  const articleStatus = [
    { tabName: '全部', key: '0' },
    { tabName: '公开', key: '1' },
    { tabName: '私密', key: '2' },
    { tabName: '草稿箱', key: '3' },
    { tabName: '回收站', key: '4' }
  ];
  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky topOffset={-90}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          style={{ ...style, background: '#fff', top: 65 }}
        />
      )}
    </Sticky>
  );
  const ArticleList = ({ status }) => {
    const list =
      articleList &&
      articleList.filter(item => (status == 0 ? item : item.status == status));
    console.log('list', list);
    return list;
    /*  console.log('list', list);
    return list && list.map(item => <div key={item.id}>{item.title}</div>); */
  };
  return (
    <BasicLayout breadcrumbList={bdList}>
      <StickyContainer>
        <Tabs
          defaultActiveKey="0"
          renderTabBar={renderTabBar}
          style={{ position: 'relative', top: '-20px' }}
        >
          {articleStatus &&
            articleStatus.map(item => (
              <TabPane
                tab={item.tabName + `(${ArticleList(item.key).length})`}
                key={item.key}
              >
                {ArticleList(item.key).map(item => (
                  <div key={item.id}>{item.title}</div>
                ))}
                {/* <ArticleList status={item.key} /> */}
              </TabPane>
            ))}
        </Tabs>
      </StickyContainer>
    </BasicLayout>
  );
};
