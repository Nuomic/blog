import React from 'react';
import { themeColor } from './../config';
import { Menu, Layout } from 'antd';
import { menuList } from '../config';
import connect from 'react-imvc/hoc/connect';
import { Link } from 'react-imvc/component';
const { Header } = Layout;
const withData = connect(({ state }) => {
  return {
    currentPath: state.currentPath
  };
});
export default withData(({ children, currentPath }) => {
  return (
    <Layout
      style={{
        backgroundColor: themeColor.headBgColor
      }}
    >
      <Header
        style={{ backgroundColor: themeColor.headBgColor }}
        className="basic-header"
      >
        <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={currentPath != '/' ? currentPath : 'homes'}
          style={{ backgroundColor: themeColor.headBgColor, color: '#fff' }}
          className="basic-header-menu"
        >
          {menuList &&
            menuList.map(item => (
              <Menu.Item key={item.key}>
                <Link to={`/${item.key}`}>
                  <span style={{ color: '#fff' }}>{item.name}</span>
                </Link>
              </Menu.Item>
            ))}
        </Menu>
      </Header>
      <div style={{ marginTop: 64 }}>{children}</div>
    </Layout>
  );
});
