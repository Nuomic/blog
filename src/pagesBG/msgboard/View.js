import React, { useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import StickyTabs from '../components/StickyTabs';
import { Tabs, Modal, List, Button, Avatar, Form, Input } from 'antd';
import { Link } from 'react-imvc/component';
import moment from 'moment';
import 'moment/locale/zh-cn';
const { Item } = Form;
const { confirm } = Modal;
const { TabPane } = Tabs;
export default ({ state, handlers }) => {
  const { commentList } = state;
  const { handleDeleteComment, handleSaveComment } = handlers;
  const bdList = [{ name: '首页', href: '/admin' }, { name: '留言管理' }];
  const articleStatus = [
    { tabName: '评论管理', key: '0' },
    { tabName: '留言管理', key: '1' },
    { tabName: '我的回复', key: '2' }
  ];
  const [comFormId, setComFormId] = useState(undefined);
  const commentType = type =>
    type === '0'
      ? commentList.filter(item => !!item.articleInfo && !item.isMine)
      : type === '1'
      ? commentList.filter(item => !item.articleInfo && !item.isMine)
      : type === '2'
      ? commentList.filter(item => !item.articleInfo && item.isMine)
      : [];
  const CommentForm = Form.create()(({ form }) => {
    const { getFieldDecorator, validateFields, getFieldValue } = form;
    const handleSubmit = e => {
      e.preventDefault();
      validateFields((err, values) => {
        if (!err) {
          handleSaveComment({ ...values, parentId: comFormId });
        }
      });
    };
    return (
      <Form
        onSubmit={handleSubmit}
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 15 }}
        colon={false}
      >
        <Item
          label={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
        >
          {getFieldDecorator('comment')(
            <Input
              placeholder="发表你的评论"
              style={{
                width: '100%',
                position: 'relative',
                top: 5
              }}
              suffix={
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ position: 'relative', right: '-12px' }}
                  disabled={!getFieldValue('comment')}
                >
                  发表评论
                </Button>
              }
            />
          )}
        </Item>
      </Form>
    );
  });
  //删除提示框
  const showConfirm = id => {
    confirm({
      title: '是否要删除这条评论',
      onOk: async () => {
        await handleDeleteComment(id);
      },
      onCancel() {}
    });
  };
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
                      <Button type="link" onClick={() => setComFormId(item.id)}>
                        快速回复
                      </Button>,
                      <Button
                        type="link"
                        style={{ color: 'red' }}
                        onClick={showConfirm.bind(this, item.id)}
                      >
                        删除
                      </Button>
                    ]}
                  >
                    <div style={{ width: '100%' }}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={
                          <span>
                            {`${item.nickname}  ${moment(
                              item.date
                            ).fromNow()} `}
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
                      {comFormId == item.id && <CommentForm />}
                    </div>
                  </List.Item>
                )}
              />
            </TabPane>
          ))}
      </StickyTabs>
    </BasicLayout>
  );
};
