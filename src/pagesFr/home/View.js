import React from 'react'
import {Row ,Col} from 'antd'
import BasicLayout from '../components/BasicLayout'
import Carousel from './components/Carousel'
import { Style } from 'react-imvc/component'
import Sider from '../components/Sider'
import Footer from '../components/Footer'
import Article from '../components/Article'
export default (props) => {
  console.log('props', props)
  return (
    <BasicLayout>
      <Style name="home" />
      <Carousel></Carousel>
      <Row>
        <Col span={5}><Sider></Sider></Col>
        <Col span={19}><Article></Article></Col>
      </Row> 
      <Footer></Footer>
    </BasicLayout>
  )
}