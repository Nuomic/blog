import React, { useState } from 'react';
import { Layout, Icon, Breadcrumb, Button, Avatar, Badge } from 'antd';
import connect from 'react-imvc/hoc/connect';
import { Style, Link } from 'react-imvc/component';
import { useCtrl } from 'react-imvc/hook';
const { Header } = Layout;
const withData = connect(({ state, handlers }) => {
  console.log('handlers', handlers);
  return {
    handleLogout: handlers.loadingText
  };
});
// export default withData(Loading)
export default withData(
  ({ collapsed, handleToggle, breadcrumbList, handleLogout }) => {
    // const { handleLogout } = useCtrl();
    console.log('handleLogout', handleLogout);
    return (
      <Header className="basic-header">
        <Icon
          className="basic-trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={handleToggle}
        />
        <div className="basic-breadcrumb" style={{ display: 'inline-block' }}>
          {(breadcrumbList && (
            <Breadcrumb separator=">" className="basic-layout-breadcrumb-bg">
              {breadcrumbList.map((item, index) => (
                <Breadcrumb.Item key={index}>
                  <Link to={item.href}>{item.name}</Link>
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          )) ||
            null}
        </div>
        <div className="fr " style={{ paddingRight: 24, lineHeight: '66px' }}>
          <span style={{ margin: '0 30px', position: 'relative', top: 10 }}>
            <Badge count={100}>
              <Icon type="bell" style={{ fontSize: 30 }} />
            </Badge>
          </span>

          <Avatar></Avatar>
          <Button type="link" onClick={handleLogout}>
            退出登录
          </Button>
        </div>
      </Header>
    );
  }
);
