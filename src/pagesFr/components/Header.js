import React from 'react';
import { themeColor } from './../config';
import { Menu, Layout } from 'antd';
import connect from 'react-imvc/hoc/connect';
const { Header } = Layout;
const withData = connect(({ state }) => {
  return {
    currentPath: state.currentPath
  };
});
export default withData(({ children, currentPath }) => {
  const handleClick = e => {
    window.location.href = `/${e.key}`;
  };
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
          onClick={handleClick}
          mode="horizontal"
          defaultSelectedKeys={currentPath != '/' ? currentPath : 'homes'}
          style={{ backgroundColor: themeColor.headBgColor }}
          className="basic-header-menu"
        >
          <Menu.Item key="home">首页</Menu.Item>
          <Menu.Item key="about">关于</Menu.Item>
          <Menu.Item key="article">博文</Menu.Item>
          <Menu.Item key="portfolio">作品集</Menu.Item>
          <Menu.Item key="msgboard">留言板</Menu.Item>
        </Menu>
      </Header>
      <div style={{ marginTop: 64 }}>{children}</div>
    </Layout>
  );
});
