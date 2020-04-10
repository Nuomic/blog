import React, { useState } from 'react';
import { Descriptions, List, Card, Icon, Modal } from 'antd';
import { useCtrl } from 'react-imvc/hook';
const { confirm } = Modal;
export default ({ dataSource, changModalStatus }) => {
  const { handleSaveFriend, handleDeleteFriend } = useCtrl();
  //删除提示框
  const deleteConfirm = (id) => {
    confirm({
      title: '确定要删除该友链吗？',
      onOk: async () => {
        await handleDeleteFriend(id);
      },
      onCancel() {},
    });
  };
  const changeStatusConfirm = (value) => {
    console.log('value', value);
    confirm({
      title: `是否将该友链移动到  ${value.status == '0' ? '已审核' : '待审核'}`,
      onOk: async () => {
        await handleSaveFriend(value);
      },
      onCancel() {},
    });
  };
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        lg: 3,
        xl: 4,
      }}
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Card
            className="friend-item-card"
            bordered={false}
            size="small"
            actions={[
              <Icon
                type={item.status == '0' ? 'lock' : 'unlock'}
                onClick={() =>
                  changeStatusConfirm({
                    friendId: item.id,
                    status: item.status == '0' ? '1' : '0',
                  })
                }
              />,
              <Icon type="edit" onClick={() => changModalStatus(item)} />,
              <Icon
                type="delete"
                style={{ color: 'red' }}
                onClick={() => deleteConfirm(item.id)}
              />,
            ]}
          >
            <Card.Meta
              description={
                <Descriptions column={1} bordered size="small">
                  <Descriptions.Item label="昵称">
                    {item.nickname}
                  </Descriptions.Item>
                  <Descriptions.Item label="邮箱">
                    {item.email}
                  </Descriptions.Item>
                  <Descriptions.Item label="网站名称">
                    {item.siteName}
                  </Descriptions.Item>
                  <Descriptions.Item label="网站地址">
                    <a href={'http://' + item.siteUrl} target="blank">
                      {item.siteUrl}
                    </a>
                  </Descriptions.Item>
                  <Descriptions.Item label="描述">
                    <div style={{ minHeight: 150 }}>{item.description}</div>
                  </Descriptions.Item>
                </Descriptions>
              }
            />
          </Card>
        </List.Item>
      )}
    />
  );
};
