import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import { useCtrl, useModelState } from 'react-imvc/hook';
import { Link } from 'react-imvc/component';
import BlogDesc from './BlogDesc';
export default ({ addTabs }) => {
  const actionList = [
    {
      key: '1',
      name: '关于我',
      imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      content: BlogDesc
    },
    {
      key: '2',
      name: '主题配色',
      imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      content: BlogDesc
    },
    {
      key: '3',
      name: '关于我',
      imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      content: BlogDesc
    },
    {
      key: '4',
      name: '关于我',
      imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      content: BlogDesc
    }
  ];
  return (
    <Row gutter={16}>
      {actionList.map(item => (
        <Col xs={12} lg={8} xl={6} xxl={4} key={item.key}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src={item.imgUrl}
                onClick={addTabs.bind(this, item.key, item.name, item.content)}
              />
            }
          >
            <Card.Meta
              title={item.name}
              description={item.desc}
              style={{ textAlign: 'center' }}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
