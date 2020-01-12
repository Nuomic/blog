import React, { useState } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import connect from 'react-imvc/hoc/connect';
import { Style, Link } from 'react-imvc/component';
const { Header, Sider, Content, Footer } = Layout;
const withData = connect(({ state }) => {
  return { state };
});
export default withData(({ state, children, breadcrumbList }) => {
  console.log('breadcrumbList', breadcrumbList);
  //目录
  const menuList = [
    {
      key: 'home',
      name: '首页',
      icon: 'home'
    },
    {
      key: '2',
      name: '文章管理',
      icon: 'video-camera'
    },
    {
      key: '3',
      name: '栏目管理',
      icon: 'upload'
    },
    {
      key: '4',
      name: '资源管理',
      icon: 'upload'
    },
    {
      key: '5',
      name: '留言管理',
      icon: 'upload'
    }
  ];
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
        <Sider
          className="basic-sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="lg"
          onCollapse={handleToggle}
        >
          <div className="basic-logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menuList &&
              menuList.map(item => (
                <Menu.Item key={item.key}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Menu.Item>
              ))}
          </Menu>
        </Sider>
        <Layout
          style={{ marginLeft: collapsed ? 80 : 200, transition: '0.2s' }}
        >
          <div className="overflow-hidden position-fixed">
            <Header className="basic-header">
              <Icon
                className="basic-trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={handleToggle}
              />
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
                's'}
            </div>
          </div>
          <div style={{ marginTop: 66 }}></div>

          <Content className="basic-content">{children}</Content>
          <Footer className="align-center">
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
});
