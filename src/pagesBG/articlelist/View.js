import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { StickyContainer, Sticky } from 'react-sticky';
import { Table, Tabs, List, Icon, Button, Tag, Modal } from 'antd';
import { Link } from 'react-imvc/component';
const { confirm } = Modal;
const { TabPane } = Tabs;
export default ({ state, handlers }) => {
  const bdList = [
    { name: '首页', href: '/admin' },
    { name: '文章管理', href: '/articlemng' }
  ];
  const { articleList } = state;
  const { handleDelete } = handlers;
  const articleStatus = [
    { tabName: '全部', key: '0' },
    { tabName: '公开', key: '1' },
    { tabName: '私密', key: '2' },
    { tabName: '草稿箱', key: '3' },
    { tabName: '回收站', key: '4' }
  ];
  //粘性定位元素
  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky topOffset={-80}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          style={{ ...style, background: '#fff', top: 68, zIndex: 1 }}
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
  // 文章分类处理
  const ArticleList = status =>
    articleList &&
    articleList.filter(item => (status == 0 ? true : item.status == status));

  //删除提示框
  function showConfirm(id, status) {
    confirm({
      title: '确定要删除改文章吗？',
      content:
        status == 3 || status == 4
          ? '是否彻底删除，删除后将无法找回'
          : '删除后可在回收站恢复',
      onOk: async () => {
        await handleDelete(id, status);
      },
      onCancel() {}
    });
  }

  return (
    <BasicLayout breadcrumbList={bdList}>
      <StickyContainer>
        <Tabs
          tabBarExtraContent={
            <Link to={`/md/add`}>
              <Button type="primary" ghost icon="plus">
                新增
              </Button>
            </Link>
          }
          defaultActiveKey="0"
          renderTabBar={renderTabBar}
          // style={{ position: 'relative', top: '-20px' }}
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
                        <Link to={`/md/edit/${item.id}`}>编辑</Link>,
                        <Link to={`/articledetail/${item.id}`}>查看</Link>,
                        <Button
                          type="link"
                          style={{ color: 'red', padding: 0 }}
                          onClick={showConfirm.bind(this, item.id, item.status)}
                        >
                          删除
                        </Button>
                      ]}
                    >
                      <List.Item.Meta
                        title={
                          <span style={{ fontWeight: 600 }}>
                            {item.status == 3 ? (
                              <Tag color="green" className="article-status-tag">
                                草稿
                              </Tag>
                            ) : item.status == 4 ? (
                              <Tag
                                color="purple"
                                className="article-status-tag"
                              >
                                回收
                              </Tag>
                            ) : (
                              ''
                            )}
                            {item.title}
                          </span>
                        }
                        description={
                          <div>
                            <IconText type="clock-circle" text={item.date} />
                            <IconText type="read" text={item.viewCount} />
                            <IconText type="like-o" text={item.likeCount} />
                            <IconText type="message" text={item.commentCount} />
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
