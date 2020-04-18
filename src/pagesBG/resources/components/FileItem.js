import React from 'react';
import { Menu, Card, Dropdown, Typography, Icon } from 'antd';
const { Paragraph } = Typography;
export default ({ item }) => {
  const menuConfig = [
    {
      key: 1,
      icon: 'edit',
      title: '重命名',
      color: 'green',
    },
    {
      key: 2,
      icon: 'download',
      title: '下载',
      color: 'blue',
    },
    {
      key: 3,
      icon: 'delete',
      title: '删除',
      color: 'red',
    },
    {
      key: 4,
      icon: 'eye',
      title: '预览',
      // color: 'green',
    },
  ];
  const menu = (
    <Menu>
      {menuConfig.map((item) => (
        <Menu.Item key={item.key} style={{ color: item.color }}>
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
          <Paragraph ellipsis={{ rows: 3 }} /* editable */>
            {item.originalname}
          </Paragraph>
        </Card>
      </div>
    </Dropdown>
  );
};
