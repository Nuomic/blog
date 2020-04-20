import React, { useState, useEffect } from 'react';
import connect from 'react-imvc/hoc/connect';
import { Link } from 'react-imvc/component';
import { useModelState, useCtrl } from 'react-imvc/hook';
import moment from 'moment';
import {
  List,
  Icon,
  Typography,
  Button,
  Skeleton,
  Divider,
  Card,
  Tag,
} from 'antd';
const { Paragraph } = Typography;
export default () => {
  const { handleChangeLikeCount } = useCtrl();
  const { articleList } = useModelState();
  useEffect(() => {
    setLoading(false);
    const articleLikeStatus =
      JSON.parse(window.localStorage.getItem('articleLikeStatus')) || {};
    setLikeStatus(articleLikeStatus);
  }, []);
  const [loading, setLoading] = useState(true);
  const [likeStatus, setLikeStatus] = useState({});
  const initLikeCount = {};
  articleList &&
    articleList.forEach((item) => {
      initLikeCount[item.id] = item.likeCount;
    });
  const [likeCount, setLikeCount] = useState(initLikeCount);
  console.log('likeCount', likeCount);
  const handleToDetail = (id) => {
    return `/articledetail/${id}`;
  };
  const changeLikeCount = (id) => {
    let current = { [id]: likeCount[id] };
    const articleLikeStatus =
      JSON.parse(window.localStorage.getItem('articleLikeStatus')) || {};
    if (articleLikeStatus[id]) {
      // delete articleLikeStatus[id];
      // setLikeStatus(articleLikeStatus);
      // current[id]--;
    } else {
      articleLikeStatus[id] = true;
      setLikeStatus(articleLikeStatus);
      current[id]++;

      const callback = () => {
        setLikeCount({ ...likeCount, ...current });
        let finalValue = JSON.stringify(articleLikeStatus);
        window.localStorage.setItem('articleLikeStatus', finalValue);
      };
      handleChangeLikeCount({ id, likeCount: current[id] }, callback);
    }
    // const callback = () => {
    //   setLikeCount({ ...likeCount, ...current });
    //   let finalValue = JSON.stringify(articleLikeStatus);
    //   window.localStorage.setItem('articleLikeStatus', finalValue);
    // };
    // handleChangeLikeCount({ id, likeCount: current[id] }, callback);
  };
  const IconText = ({ type, text, style, onClick }) => {
    if (!style) style = {};
    return (
      <span style={{ padding: '0 20px 0 0' }} onClick={onClick}>
        <Icon type={type} style={{ marginRight: 8, ...style }} />
        <span style={{ color: !(type == 'clock-circle') && '#3399ea' }}>
          {text}
        </span>
      </span>
    );
  };
  return (
    <List
      //  loading
      split={false}
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={articleList}
      renderItem={(item) => (
        <Skeleton
          loading={loading}
          active
          paragraph={{ rows: 4, width: '100%' }}
        >
          <List.Item
            key={item.id}
            className="list-item-card"
            // style={{ padding: '4px 0' }}
          >
            <Card
              style={{ opacity: 0.9, margin: 0 }}
              size="small"
              bordered={false}
            >
              <List.Item.Meta
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  margin: '5px 0',
                }}
                title={
                  <Link to={handleToDetail(item.id)}>
                    <Paragraph
                      ellipsis={{ rows: 1 }}
                      className="title-style"
                      style={{ marginBottom: 10, maxWidth: 480 }}
                    >
                      <Tag color="magenta">{item.categoryInfo.name}</Tag>
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
                        width: 'calc(100% - 300px)',
                      }}
                    >
                      <IconText
                        type="clock-circle"
                        text={moment(item.createdAt).format(
                          'YYYY-MM-DD hh:mm:ss'
                        )}
                      />
                      <IconText type="read" text={item.viewCount} />
                      <IconText
                        onClick={changeLikeCount.bind(this, item.id)}
                        type="like"
                        style={{ color: likeStatus[item.id] ? 'red' : 'block' }}
                        text={likeCount[item.id]}
                      />
                      <IconText type="message" text={item.commentCount} />
                      <Link to={handleToDetail(item.id)}>
                        <Button size="small" style={{ float: 'right' }}>
                          阅读更多
                        </Button>
                      </Link>
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
};
