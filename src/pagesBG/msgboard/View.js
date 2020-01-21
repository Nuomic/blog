import React, { useEffect } from 'react';
import BasicLayout from '../components/BasicLayout';
import StickyTabs from '../components/StickyTabs';
import { Tabs, Modal, List, Button, Avatar } from 'antd';
import { Link } from 'react-imvc/component';
import moment from 'moment';
import 'moment/locale/zh-cn';
const { confirm } = Modal;
const { TabPane } = Tabs;
export default ({ state }) => {
  const { commentList } = state;
  console.log('commentList', commentList);
  const bdList = [{ name: '首页', href: '/admin' }, { name: '留言管理' }];
  const articleStatus = [
    { tabName: '评论管理', key: '0' },
    { tabName: '留言管理', key: '1' }
  ];
  const commentType = type =>
    type === '0'
      ? commentList.filter(item => !!item.articleInfo)
      : type === '1'
      ? commentList.filter(item => !item.articleInfo)
      : [];
  return (
    <BasicLayout breadcrumbList={bdList}>
      <StickyTabs>
        {articleStatus &&
          articleStatus.map(item => (
            <TabPane
              tab={item.tabName + ` (${commentType(item.key).length})`}
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
                dataSource={commentType(item.key)}
                renderItem={item => (
                  <List.Item
                    key={item.id}
                    actions={[
                      <Button
                        type="link"
                        // onClick={showConfirm.bind(this, item.id, item.status)}
                      >
                        快速回复
                      </Button>,
                      <Button
                        type="link"
                        style={{ color: 'red' }}
                        // onClick={showConfirm.bind(this, item.id, item.status)}
                      >
                        删除
                      </Button>
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={
                        <span>
                          {`${item.nickname}  ${moment(item.date).fromNow()} `}
                          {item.articleInfo ? (
                            <span>
                              回复了你的文章{' '}
                              <Link
                                to={'/articledetail/' + item.articleInfo.id}
                              >
                                {item.articleInfo.title}
                              </Link>
                            </span>
                          ) : (
                            '给你留言'
                          )}
                        </span>
                      }
                      description={item.content}
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
