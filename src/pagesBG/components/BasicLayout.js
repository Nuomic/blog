import React, { useState } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Button } from 'antd';
import connect from 'react-imvc/hoc/connect';
import { Style, Link } from 'react-imvc/component';
import { menuList } from '../config';
const { Header, Sider, Content, Footer } = Layout;
const withData = connect(({ state }) => {
  return {
    currentPath: state.location.pathname
  };
});
export default withData(({ state, children, breadcrumbList, currentPath }) => {
  console.log('breadcrumbList', breadcrumbList);
  const [collapsed, setCollapsed] = useState(false);
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Style name="antd" />
      <Style name="antdPro" />
      <Style name="customize" />
      <Style name="common" />
      <Layout>
        <div className="overflow-hidden">
          <Sider
            className="basic-sider overflow-hidden"
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint="lg"
            onCollapse={handleToggle}
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
                    <Link to={`/${item.key}`}>
                      <Icon type={item.icon} />
                      <span>{item.name}</span>
                    </Link>
                  </Menu.Item>
                ))}
            </Menu>
          </Sider>
        </div>
        <Layout
          style={{
            marginLeft: collapsed ? 80 : 200,
            transition: '0.2s',
            width: '100%'
          }}
        >
          <div className="overflow-hidden position-fixed">
            <Header className="basic-header">
              <Icon
                className="basic-trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={handleToggle}
              />
              <Button>退出登录</Button>
            </Header>
            <div className="basic-breadcrumb">
              {(breadcrumbList && (
                <Breadcrumb
                  separator=">"
                  className="basic-layout-breadcrumb-bg"
                >
                  {breadcrumbList.map(item => (
                    <Breadcrumb.Item>
                      <Link to={item.href}>{item.name}</Link>
                    </Breadcrumb.Item>
                  ))}
                </Breadcrumb>
              )) ||
                null}
            </div>
          </div>
          <span style={{ marginTop: 66 }} />
          <Content className="basic-content">{children}</Content>
          <Footer className="align-center">
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
});
