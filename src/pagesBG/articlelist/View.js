import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { StickyContainer, Sticky } from 'react-sticky';
import { Table, Tabs, List, Icon } from 'antd';
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
          style={{ ...style, background: '#fff', top: 65, zIndex: 1 }}
        />
      )}
    </Sticky>
  );
  const IconText = ({ type, text }) => (
    <span style={{ padding: '0 20px 0 0' }}>
      <Icon type={type} style={{ marginRight: 8 }} />
      <span>{text}</span>
    </span>
  );
  const ArticleList = status => {
    console.log('status', status);
    console.log('articleList', articleList);
    const list =
      articleList &&
      articleList.filter(item => (status == 0 ? true : item.status == status));
    console.log('list', list);
    return list;
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
                tab={item.tabName + ` (${ArticleList(item.key).length})`}
                key={item.key}
              >
                <List
                  pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 10
                  }}
                  itemLayout="horizontal"
                  dataSource={ArticleList(item.key)}
                  renderItem={item => (
                    <List.Item
                      key={item.id}
                      actions={[
                        <a key="list-loadmore-edit">edit</a>,
                        <a key="list-loadmore-more">more</a>
                      ]}
                    >
                      <List.Item.Meta
                        title={
                          <span style={{ fontWeight: 600 }}>{item.title}</span>
                        }
                        description={
                          <div>
                            <IconText
                              type="clock-circle"
                              text={item.date}
                              key="list-vertical-star-o"
                            />
                            <IconText
                              type="eye"
                              text={item.viewCount}
                              key="list-vertical-eye"
                              style
                            ></IconText>
                            <IconText
                              type="like-o"
                              text={item.likeCount}
                              key="list-vertical-like-o"
                            />

                            <IconText
                              type="message"
                              text={item.commentCount}
                              key="list-vertical-message"
                            />
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </TabPane>
            ))}
        </Tabs>
      </StickyContainer>
    </BasicLayout>
  );
};
