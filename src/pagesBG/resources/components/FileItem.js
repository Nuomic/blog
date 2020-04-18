import React, { useState } from 'react';
import { Menu, Card, Dropdown, Typography, Icon } from 'antd';
import { useCtrl } from 'react-imvc/hook';
const { Paragraph } = Typography;
export default ({ item }) => {
  const menuConfig = [
    {
      icon: 'edit',
      title: '重命名',
      color: 'green',
    },
    {
      icon: 'download',
      title: '下载',
      color: 'blue',
    },
    {
      icon: 'eye',
      title: '预览',
    },
    {
      icon: 'delete',
      title: '删除',
      color: 'red',
    },
  ];
  if (item.isTrash)
    menuConfig.splice(3, 0, { icon: 'undo', title: '恢复', color: 'purple' });
  const { handleDeleteResource, handleChangeResourceStatus } = useCtrl();
  const handleAction = (key) => {
    console.log('key', key);
    switch (key) {
      // case 0:
      //   handleChangeResourceStatus(item.id, !item.isTrash);
      //   break;
      // case 1:
      //   handleDeleteResource(item.id);
      // case 2:
      //   handleChangeResourceStatus(item.id, !item.isTrash);
      //   break;
      case 3:
        handleChangeResourceStatus({
          resourceId: item.id,
          isTrash: !item.isTrash,
        });
        break;
      case 4:
        handleDeleteResource(item.id);
      default:
        break;
    }
  };

  const menu = (
    <Menu>
      {menuConfig.map((item, index) => (
        <Menu.Item
          key={index}
          style={{ color: item.color }}
          onClick={handleAction.bind(this, index)}
        >
          <Icon type={item.icon} />
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown
      overlay={menu}
      trigger={['contextMenu']}
      className="home-card inline-block"
    >
      <div title={'1111'}>
        <Card className="file-card">
          <div style={{ height: 80 }}>
            <img
              src={`/static/images/filetype/${item.ext.split('.')[1]}.png`}
              width="100%"
            />
          </div>
          <Paragraph ellipsis={{ rows: 3 }} editable>
            {item.originalname}
          </Paragraph>
        </Card>
      </div>
    </Dropdown>
  );
};
