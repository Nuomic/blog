import React, { useState, useEffect } from 'react';
import connect from 'react-imvc/hoc/connect';
import {
  List,
  Icon,
  Typography,
  Button,
  Skeleton,
  Divider,
  Card,
  Tag
} from 'antd';
const { Paragraph } = Typography;
const withData = connect(({ state }) => {
  return {
    articleList: state.articleList
  };
});
export default withData(({ articleList }) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 0);
  const [likeCount, setLikeCount] = useState(articleList.likeCount);

  const IconText = ({ type, text }) => (
    <span style={{ padding: '0 20px 0 0' }}>
      <Icon type={type} style={{ marginRight: 8 }} />
      <span style={{ color: !(type == 'clock-circle') && '#3399ea' }}>
        {text}
      </span>
    </span>
  );
  const handleToDetail = e => {
    console.log('e', e);
  };
  const handleAddLikeCount = e => {
    console(e);
    setLikeCount(likeCount++);
  };
  return (
    <List
      //  loading
      split={false}
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 6
      }}
      dataSource={articleList}
      renderItem={item => (
        <Skeleton
          loading={loading}
          active
          paragraph={{ rows: 4, width: '100%' }}
        >
          <List.Item key={item.id}>
            <Card style={{ opacity: 0.9, margin: 0 }} size="small">
              <List.Item.Meta
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  margin: '5px 0'
                }}
                title={
                  <>
                    <Paragraph
                      ellipsis={{ rows: 1 }}
                      className="title-style"
                      onClick={handleToDetail}
                      style={{ marginBottom: 10, maxWidth: 480 }}
                    >
                      <Tag color="magenta">{item.tagInfo.name}</Tag>
                      {item.title}
                    </Paragraph>
                    <Divider className="margin-0"></Divider>
                  </>
                }
                avatar={
                  //左边图片
                  <div className="article-avatar" onClick={handleToDetail}>
                    <img
                      className="img-hover"
                      alt="logo"
                      src={item.avatar || item.categoryInfo.avatar}
                    />
                  </div>
                }
                description={
                  <>
                    <Paragraph ellipsis={{ rows: 3 }}>{item.content}</Paragraph>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        width: 'calc(100% - 300px)'
                      }}
                    >
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
                        onClick={handleAddLikeCount}
                        key="list-vertical-like-o"
                      />
                      <span>
                        <IconText
                          type="message"
                          text={item.commentCount}
                          key="list-vertical-message"
                        />
                        <Button
                          size="small"
                          style={{ float: 'right' }}
                          onClick={handleToDetail}
                        >
                          阅读更多
                        </Button>
                      </span>
                    </div>
                  </>
                }
              />
            </Card>
          </List.Item>
        </Skeleton>
      )}
    />
  );
});
