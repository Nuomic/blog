import React, { useState } from 'react';
import connect from 'react-imvc/hoc/connect';
import InfiniteScroll from 'react-infinite-scroller';
import {
  List,
  message,
  Spin,
  Input,
  Divider,
  Card,
  Comment,
  Tooltip,
  Icon,
  Avatar,
  Form,
  Button
} from 'antd';
const { TextArea } = Input;
import moment from 'moment';
const withData = connect(({ state, handlers }) => {
  return {
    commentList: state.commentList,
    total: state.total,
    getcommentList: handlers.handleGetCommentList
  };
});

export default withData(({ commentList, getcommentList, total }) => {
  console.log('commentList', commentList);
  console.log('total', total);
  const [commentData, setCommentData] = useState({
    data: commentList,
    loading: false,
    hasMore: true
  });
  const like = () => {
    setCommentData({
      likes: 1,
      dislikes: 0,
      action: 'liked'
    });
  };
  const dislike = () => {
    setCommentData({
      likes: 0,
      dislikes: 1,
      action: 'disliked'
    });
  };
  const actions = () => [
    <span key="comment-basic-like">
      <Tooltip title="赞">
        <Icon
          type="like"
          theme={'action' === 'liked' ? 'filled' : 'outlined'}
          onClick={like}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>
        {commentList.likeCount}
      </span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="踩">
        <Icon
          type="dislike"
          theme={'action' === 'disliked' ? 'filled' : 'outlined'}
          onClick={dislike}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>
        {commentList.dislikeCount}
      </span>
    </span>,
    <span key="comment-basic-reply-to">Reply to</span>
  ];
  //评论表单
  const CommentForm = item => {
    return (
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
    );
  };
  const Comments = ({ item, children }) => {
    return (
      <Comment
        actions={actions()}
        author={<a>{item.nickname}</a>}
        avatar={
          <Avatar
            src={
              item.avatar ||
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            }
            alt="Han Solo"
          />
        }
        content={<p>{item.content}</p>}
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      >
        {children}
      </Comment>
    );
  };
  const handleInfiniteOnLoad = async () => {
    setCommentData({
      loading: true
    });
    if (commentData.data.length > total) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    await getcommentList();
    setCommentData({
      data: {
        ...commentData.data,
        commentList
      }
    });
  };
  return (
    <Card>
      <CommentForm />
      <Divider orientation="left">评论</Divider>
      <Divider orientation="right">{total}</Divider>
      <InfiniteScroll
        // initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={commentData.loading && commentData.hasMore}
        loader={<Spin />}
      >
        <List
          dataSource={commentData.data}
          renderItem={item => (
            <List.Item key={item.id}>
              <Comments item={item}>
                {item.subList.length > 0 &&
                  item.subList &&
                  item.subList.map(item => (
                    <Comments item={item} key={item.id}></Comments>
                  ))}
              </Comments>
            </List.Item>
          )}
        >
          {/* {commentData.loading && commentData.hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )} */}
        </List>
      </InfiniteScroll>
    </Card>
  );
});
