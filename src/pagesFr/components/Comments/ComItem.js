import React, { useState, useEffect } from 'react';
import ComForm from './ComForm';
import { Comment, Tooltip, Icon, Avatar, Button } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { OuterClickWrapper } from 'react-imvc/component';
import { useCtrl } from 'react-imvc/hook';
export default function ComItem({ item, comFormId, setComFormId }) {
  const { handleCommentLikeCount } = useCtrl();
  const [openState, setOpenState] = useState({});
  useEffect(() => {
    setLikeCount(item.likeCount);
    const commentLikeStatus =
      JSON.parse(window.localStorage.getItem('commentLikeStatus')) || {};
    setIsLike(commentLikeStatus[item.id]);
  }, [item.id]);
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likeCount);
  // console.log('likeCount', likeCount);
  const like = () => {
    const { id } = item;
    let currentCount = likeCount;
    const commentLikeStatus =
      JSON.parse(window.localStorage.getItem('commentLikeStatus')) || {};
    if (isLike) {
      // delete commentLikeStatus[id];
      // currentCount --;
    } else {
      currentCount++;
      commentLikeStatus[id] = true;
      const callback = () => {
        setIsLike(commentLikeStatus[id]);
        setLikeCount(currentCount);
        let finalValue = JSON.stringify(commentLikeStatus);
        window.localStorage.setItem('commentLikeStatus', finalValue);
      };
      handleCommentLikeCount(
        { commentId: id, likeCount: currentCount },
        callback
      );
    }
  };
  const handleChangeComFormStatus = id => {
    setComFormId(id);
  };
  const childrenCount = item => {
    var length = item.children.length;
    const count = children => {
      children.forEach(item => {
        if (item.children) {
          length += item.children.length;
          count(item.children);
        }
      });
    };
    count(item.children);
    return length;
  };
  const actions = item => [
    <span key="comment-basic-like">
      <Tooltip title={(isLike ? '已' : '') + '赞'}>
        <Icon
          type="like"
          theme={isLike ? 'filled' : 'outlined'}
          style={{ color: isLike ? 'red' : '' }}
          onClick={like}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likeCount}</span>
    </span>,
    <span
      key="comment-basic-reply-to"
      onClick={handleChangeComFormStatus.bind(this, item.id)}
    >
      回复
    </span>,
    item.children && item.children.length > 0 && (
      <Button
        size="small"
        style={{ fontSize: 12 }}
        type="link"
        onClick={() => {
          setOpenState({ ...openState, [item.id]: !openState[item.id] });
        }}
      >
        {openState[item.id] ? '收起回复' : `全部回复(${childrenCount(item)})`}
      </Button>
    )
  ];
  const Comments = ({ item }) => {
    return (
      <Comment
        actions={actions(item)}
        author={<a>{item.nickname}</a>}
        avatar={<Avatar src={item.avatar} alt="Han Solo" />}
        content={<p>{item.content}</p>}
        datetime={
          <Tooltip title={moment(item.date).format('YYYY-MM-DD HH:mm:ss')}>
            <span style={{ color: '#555' }}>{moment(item.date).fromNow()}</span>
          </Tooltip>
        }
      >
        {item.id == comFormId && (
          <OuterClickWrapper onClick={() => setComFormId(undefined)}>
            <ComForm parentId={item.id} articleId={item.articleId} />
          </OuterClickWrapper>
        )}
        {item.children &&
          item.children.length > 0 &&
          openState[item.id] &&
          item.children.map(item => <Comments item={item} key={item.id} />)}
      </Comment>
    );
  };
  return <Comments item={item} />;
}
