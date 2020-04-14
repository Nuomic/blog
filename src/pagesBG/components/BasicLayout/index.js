import React, { useState } from 'react';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { Layout, ConfigProvider } from 'antd';
import connect from 'react-imvc/hoc/connect';
import { Style, Link } from 'react-imvc/component';
import Cookie from 'js-cookie';
import Header from './Header';
import Sider from './Sider';
import Footer from './Footer';
const { Content } = Layout;
const withData = connect(({ state }) => {
  return {
    currentPath: state.location.pathname,
    initCollapsed: state.initCollapsed,
  };
});
export default withData(
  ({ children, breadcrumbList, currentPath, initCollapsed }) => {
    const [collapsed, setCollapsed] = useState(initCollapsed);
    const handleToggle = () => {
      (Cookie.get('collapsed') == 'false' && Cookie.set('collapsed', true)) ||
        Cookie.set('collapsed', false);
      setCollapsed(Cookie.get('collapsed') == 'false' ? false : true);
    };
    const handleChangeCollapsed = (collapsed) => {
      // console.log('collapsed', collapsed);
      Cookie.set('collapsed', collapsed);
      setCollapsed(Cookie.get('collapsed') == 'false' ? false : true);
    };
    return (
      <ConfigProvider locale={zh_CN}>
        <Style name="antd" />
        <Style name="antdPro" />
        <Style name="customize" />
        <Style name="commonBG" />
        <Layout style={{ minWidth: 600 }}>
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
              transition: '0.2s',
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
      </ConfigProvider>
    );
  }
);
