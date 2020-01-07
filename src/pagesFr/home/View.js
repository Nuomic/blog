import React from 'react';
import { Row, Col } from 'antd';
import BasicLayout from '../components/BasicLayout';
import Carousel from './components/Carousel';
import { Style } from 'react-imvc/component';
import Sider from '../components/Sider';
import Article from '../components/Article';
export default props => {
  console.log('props', props);

  return (
    <BasicLayout>
      <Style name="home" />
      {/* <Carousel></Carousel> */}
      <div style={{ marginTop: 20 }}>
        <Article></Article>
      </div>
    </BasicLayout>
  );
};
