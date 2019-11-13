import React from 'react'
import StarBG from './StarBG'
import {themeColor} from './../config'
import { Menu, Icon, Breadcrumb, Layout } from 'antd';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
export default ({ children }) => {
  const handleClick = e => {
    console.log('click ', e);
  }
  return (
    <Layout style={{
      backgroundColor: themeColor.headBgColor
    }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '66px', backgroundColor: themeColor.headBgColor, padding: 0 }}>
        <div className="logo" />
        <Menu
          onClick={handleClick}
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ width: '100%', lineHeight: '64px', backgroundColor: themeColor.headBgColor, color: "#fff" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      {children}
    </Layout>
  )
}
