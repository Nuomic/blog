import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
export default () => {
  return (
    <Footer className="align-center">
      博客后台管理系统 ©2019-{new Date().getFullYear()} 张伟强
    </Footer>
  );
};
