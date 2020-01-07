import React, { useState } from 'react';
import {
  Divider,
  Row,
  Col,
  Card,
  Comment,
  Tooltip,
  Icon,
  Avatar,
  Form,
  Button
} from 'antd';
import BasicLayout from '../components/BasicLayout';
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';
export default props => {
  console.log('props', props);
  const BreadcrumbList = [{ name: 'home', href: '/home' }, { name: '留言板' }];
  const [commentList, setCommentList] = useState({
    likes: 0,
    dislikes: 0,
    action: null
  });
  const like = () => {
    setCommentList({
      likes: 1,
      dislikes: 0,
      action: 'liked'
    });
  };
  const dislike = () => {
    setCommentList({
      likes: 0,
      dislikes: 1,
      action: 'disliked'
    });
  };
  const { likes, dislikes, action } = commentList;
  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        <Icon
          type="like"
          theme={action === 'liked' ? 'filled' : 'outlined'}
          onClick={like}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="Dislike">
        <Icon
          type="dislike"
          theme={action === 'disliked' ? 'filled' : 'outlined'}
          onClick={dislike}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
    </span>,
    <span key="comment-basic-reply-to">Reply to</span>
  ];

  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Card style={{ marginRight: 10, minHeight: 'calc(100% - 200px)' }}>
        <Form>
          <Form.Item>
            <TextArea rows={5} style={{ opacity: 0.8 }}></TextArea>
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={{ opacity: 0.8 }}>
              提交
            </Button>
          </Form.Item>
        </Form>
        <Divider orientation="left">评论</Divider>
        <Comment
          actions={actions}
          author={<a>Han Solo</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      </Card>
    </BasicLayout>
  );
};
