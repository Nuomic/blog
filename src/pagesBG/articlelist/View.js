import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { Tabs, List, Icon, Button, Tag, Modal } from 'antd';
import { Link } from 'react-imvc/component';
import StickyTabs from '../components/StickyTabs';
import moment from 'moment';
const { confirm } = Modal;
const { TabPane } = Tabs;
export default ({ state, handlers }) => {
  const bdList = [
    { name: '首页', href: '/admin' },
    { name: '文章管理', href: '/articlemng' }
  ];
  const { articleList } = state;
  console.log('articleList', articleList);
  const { handleDelete, handleChangeArticleStatus } = handlers;
  const articleStatus = [
    { tabName: '全部', key: '0' },
    { tabName: '公开', key: '1' },
    { tabName: '私密', key: '2' },
    { tabName: '草稿箱', key: '3' },
    { tabName: '回收站', key: '4' }
  ];

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
  const actions = item => {
    const View = (
      <Link to={`/articledetail/${item.id}`} target="blank">
        查看
      </Link>
    );
    const Recycle = (
      <Button
        type="link"
        style={{ padding: 0 }}
        onClick={handleChangeArticleStatus.bind(this, item.id, 3)}
      >
        回收至草稿箱
      </Button>
    );
    const Edit = (
      <Link to={`/admin/md/edit/${item.id}`} target="blank">
        编辑
      </Link>
    );
    const Delete = (
      <Button
        type="link"
        style={{ color: 'red', padding: 0 }}
        onClick={showConfirm.bind(this, item.id, item.status)}
      >
        删除
      </Button>
    );
    const action = [(item.status == '4' && Recycle) || Edit, Delete];
    item.status != 3 && action.unshift(View);
    return action;
  };
  return (
    <BasicLayout breadcrumbList={bdList}>
      <StickyTabs
        tabBarExtraContent={
          <Link to="/admin/md/add">
            <Button type="primary" ghost icon="plus">
              新增
            </Button>
          </Link>
        }
      >
        {articleStatus &&
          articleStatus.map(item => (
            <TabPane
              tab={
                item.tabName +
                ` (${ArticleList(item.key) && ArticleList(item.key).length})`
              }
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
                  <List.Item key={item.id} actions={actions(item)}>
                    <List.Item.Meta
                      title={
                        <span style={{ fontWeight: 600 }}>
                          {item.status == 3 ? (
                            <Tag color="green" className="article-status-tag">
                              草稿
                            </Tag>
                          ) : item.status == 4 ? (
                            <Tag color="purple" className="article-status-tag">
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
                          <IconText
                            type="clock-circle"
                            text={moment(item.createdAt).format(
                              'YYYY/MM/DD/hh:mm:ss'
                            )}
                          />
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
      </StickyTabs>
    </BasicLayout>
  );
};
