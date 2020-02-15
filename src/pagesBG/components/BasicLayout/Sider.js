import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-imvc/component';
import { menuList } from '../../config';
const { Sider } = Layout;

export default ({ currentPath, collapsed, handleToggle }) => {
  return (
    <Sider
      className="basic-sider overflow-hidden"
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
    >
      <div className="basic-logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={currentPath != '/' ? currentPath : 'home'}
      >
        {menuList &&
          menuList.map(item => (
            <Menu.Item key={item.key}>
              <Link to={`/admin/${item.key}`}>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          ))}
      </Menu>
    </Sider>
  );
};
