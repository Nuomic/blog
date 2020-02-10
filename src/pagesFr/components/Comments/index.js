import React, { useState } from 'react';
import ComForm from './ComForm';
import ComItem from './ComItem';
import { List, Divider, Card } from 'antd';
import { useModelState } from 'react-imvc/hook';
export default () => {
  const { commentList, total, location } = useModelState();
  const [comFormId, setComFormId] = useState(null);
  return (
    <Card>
      {!comFormId && (
        <ComForm
          parentId={null}
          articleId={location.params.articleId || null}
        />
      )}
      <Divider orientation="right">总评论：{total}</Divider>
      <List
        dataSource={commentList}
        renderItem={item => (
          <List.Item key={item.id} style={{ padding: 0 }}>
            <ComItem
              item={item}
              comFormId={comFormId}
              setComFormId={setComFormId}
            />
          </List.Item>
        )}
      ></List>
    </Card>
  );
};
