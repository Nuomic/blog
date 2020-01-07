import React, { useState, useEffect } from 'react';
import { List, Icon, Typography, Button, Skeleton, Divider, Card } from 'antd';
const { Paragraph } = Typography;
import { themeColor } from '../config';
export default () => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'http://ant.design',
      title: `ant design part ${i}`,
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully '
    });
  }
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 400);
  const [likeCount, setLikeCount] = useState(0);
  const IconText = ({ type, text }) => (
    <span style={{ padding: '0 15px' }}>
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
    <div
      style={{
        backgroundColor: themeColor.articleBgColor,
        padding: '0 20px 20px',
        margin: '10px 10px 10px 0',
        borderRadius: 3
      }}
    >
      <List
        //  loading
        split={false}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 6
        }}
        dataSource={listData}
        renderItem={item => (
          <Skeleton loading={loading} active paragraph={{ rows: 4 }}>
            <List.Item key={item.title}>
              <Card style={{ opacity: '0.8' }}>
                <List.Item.Meta
                  style={{ position: 'relative' }}
                  title={
                    <span className="title-style" onClick={handleToDetail}>
                      {item.title}
                    </span>
                  }
                  avatar={
                    <div
                      style={{ overflow: 'hidden', width: 272, height: 168 }}
                      onClick={handleToDetail}
                    >
                      <img
                        className="img-hover"
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    </div>
                  }
                  description={
                    <>
                      <Divider style={{ margin: '10px 0' }}></Divider>
                      <Paragraph ellipsis={{ rows: 3 }}>
                        {item.content}
                      </Paragraph>

                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          width: 'calc(100% - 300px)'
                        }}
                      >
                        <IconText
                          type="unordered-list"
                          text={'栏目'}
                          key="list-vertical-section"
                        />
                        <IconText
                          type="clock-circle"
                          text={new Date().toLocaleString()}
                          key="list-vertical-star-o"
                        />
                        <IconText
                          type="eye"
                          text="2"
                          key="list-vertical-eye"
                          style
                        ></IconText>
                        <IconText
                          type="like-o"
                          text={likeCount}
                          onClick={handleAddLikeCount}
                          key="list-vertical-like-o"
                        />
                        <span>
                          <IconText
                            type="message"
                            text="2"
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
    </div>
  );
};
