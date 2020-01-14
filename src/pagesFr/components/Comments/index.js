import React, { useState } from 'react';
import connect from 'react-imvc/hoc/connect';
import InfiniteScroll from 'react-infinite-scroller';
import ComForm from './ComForm';
import ComItem from './ComItem';
import { List, message, Spin, Divider, Card } from 'antd';
const withData = connect(({ state, handlers }) => {
  return {
    commentList: state.commentList,
    total: state.total,
    getcommentList: handlers.handleGetCommentList
  };
});

export default withData(({ commentList, getcommentList, total }) => {
  const [comFormId, setComFormId] = useState(undefined);
  console.log('comFormId', comFormId);
  console.log('commentList', commentList);
  console.log('total', total);
  const [commentData, setCommentData] = useState({
    data: commentList,
    loading: false,
    hasMore: true
  });
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
      {!comFormId && <ComForm />}
      <Divider orientation="right">总评论：{total}</Divider>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={commentData.loading && commentData.hasMore}
        loader={<Spin />}
      >
        <List
          dataSource={commentData.data}
          renderItem={item => (
            <List.Item key={item.id}>
              <ComItem
                item={item}
                comFormId={comFormId}
                setComFormId={setComFormId}
              />
            </List.Item>
          )}
        >
          {commentData.loading && commentData.hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )}
        </List>
      </InfiniteScroll>
    </Card>
  );
});
