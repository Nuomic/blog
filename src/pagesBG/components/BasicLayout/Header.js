import React, { useState } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Button, Avatar } from 'antd';
import connect from 'react-imvc/hoc/connect';
import { Style, Link } from 'react-imvc/component';
import { menuList } from '../../config';
import Cookie from 'js-cookie';
const { Header, Sider, Content, Footer } = Layout;

export default ({ collapsed, handleToggle, breadcrumbList }) => {
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
      <div className="fr" style={{ paddingRight: 24 }}>
        <Button>退出登录</Button>
      </div>
    </Header>
  );
};