import React, { useState, useEffect } from 'react';
import connect from 'react-imvc/hoc/connect';
import { Link } from 'react-imvc/component';
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
  const handleToDetail = id => {
    return `/articledetail/${id}`;
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
                  <Link to={handleToDetail(item.id)}>
                    <Paragraph
                      ellipsis={{ rows: 1 }}
                      className="title-style"
                      // onClick={handleToDetail(item.id)}
                      style={{ marginBottom: 10, maxWidth: 480 }}
                    >
                      <Tag color="magenta">{item.tagInfo.name}</Tag>
                      {item.title}
                    </Paragraph>
                    <Divider className="margin-0"></Divider>
                  </Link>
                }
                avatar={
                  //左边图片
                  <Link to={handleToDetail(item.id)}>
                    <div className="article-avatar">
                      <img
                        className="img-hover"
                        alt="logo"
                        src={item.avatar || item.categoryInfo.avatar}
                      />
                    </div>
                  </Link>
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
                        <Link to={handleToDetail(item.id)}>
                          <Button size="small" style={{ float: 'right' }}>
                            阅读更多
                          </Button>
                        </Link>
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
