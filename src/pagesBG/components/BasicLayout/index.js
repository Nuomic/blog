import React, { useState } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Button, Avatar } from 'antd';
import connect from 'react-imvc/hoc/connect';
import { Style, Link } from 'react-imvc/component';
import Header from './Header';
import Sider from './Sider';
import Footer from './Footer';
import Cookie from 'js-cookie';
const { Content } = Layout;
const withData = connect(({ state }) => {
  return {
    state,
    currentPath: state.location.pathname
  };
});
export default withData(({ state, children, breadcrumbList, currentPath }) => {
  const [collapsed, setCollapsed] = useState();
  console.log('state', state);
  console.log('collapsed', collapsed);
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  const handleChangeCollapsed = collapsed => {
    console.log('collapsed', collapsed);
    setCollapsed(collapsed);
  };
  return (
    <>
      <Style name="antd" />
      <Style name="antdPro" />
      <Style name="customize" />
      <Style name="common" />
      <Layout>
        <div
          className="position-fixed"
          style={{ paddingLeft: collapsed ? 80 : 200, transition: '0.2s' }}
        >
          <Header
            collapsed={collapsed}
            handleToggle={handleToggle}
            breadcrumbList={breadcrumbList}
          />
        </div>
        <Layout
          style={{
            marginLeft: collapsed ? 80 : 200,
            transition: '0.2s'
          }}
        >
          <Sider
            currentPath={currentPath}
            collapsed={collapsed}
            handleToggle={handleChangeCollapsed}
          />
          <Content className="basic-content">{children}</Content>
        </Layout>
        <Footer />
      </Layout>
    </>
  );
});