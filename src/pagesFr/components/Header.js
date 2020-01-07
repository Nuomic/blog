import React from 'react';
import { themeColor } from './../config';
import { Menu, Icon, Breadcrumb, Layout } from 'antd';
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
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          height: '66px',
          backgroundColor: themeColor.headBgColor,
          padding: 0
        }}
      >
        <div className="logo" />
        <Menu
          onClick={handleClick}
          mode="horizontal"
          defaultSelectedKeys={currentPath}
          style={{
            width: '100%',
            lineHeight: '64px',
            backgroundColor: themeColor.headBgColor,
            color: '#fff',
            textAlign: 'center'
          }}
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
