import React, { useState } from 'react';

import ComForm from './ComForm';
import { Comment, Tooltip, Icon, Avatar, Button } from 'antd';
import moment from 'moment';
import { OuterClickWrapper } from 'react-imvc/component';

export default function ComItem({ item, comFormId, setComFormId }) {
  const [openState, setOpenState] = useState(false);
  console.log('comFormId', comFormId);
  const [isLike, setIsLike] = useState({});
  const like = a => {
    console.log('a', a);
  };
  const dislike = a => {
    console.log('object', a);
  };
  const handleChangeComFormStatus = id => {
    setComFormId(id);
  };
  const actions = item => [
    <span key="comment-basic-like">
      <Tooltip title="赞">
        <Icon
          type="like"
          theme={'action' === 'liked' ? 'filled' : 'outlined'}
          onClick={like}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{item.likeCount}</span>
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
        {item.dislikeCount}
      </span>
    </span>,
    <span
      key="comment-basic-reply-to"
      onClick={handleChangeComFormStatus.bind(this, item.id)}
    >
      回复
    </span>,
    item.subList && item.subList.length > 0 && (
      <Button
        size="small"
        style={{ fontSize: 12 }}
        type="link"
        onClick={() => setOpenState(!openState)}
      >
        {openState ? '收起回复' : `全部回复(${item.subList.length})`}
      </Button>
    )
  ];
  const Comments = ({ item }) => {
    return (
      <Comment
        actions={actions(item)}
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
          <Tooltip title={moment(item.date).format('YYYY-MM-DD HH:mm:ss')}>
            <span style={{ color: '#555' }}>{moment(item.date).fromNow()}</span>
          </Tooltip>
        }
      >
        {item.id == comFormId && (
          <OuterClickWrapper onClick={() => setComFormId(undefined)}>
            {<ComForm parentId={item.parentId} articleId={item.articleId} />}
          </OuterClickWrapper>
        )}
        {item.subList &&
          item.subList.length > 0 &&
          openState &&
          item.subList.map(item => <Comments item={item} key={item.id} />)}
      </Comment>
    );
  };
  return <Comments item={item} />;
}
