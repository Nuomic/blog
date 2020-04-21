import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { Card, Row, Col, Icon } from 'antd';
export default ({ state, ctrl }) => {
  const { portfolioList = [] } = state;
  console.log('state', state);
  console.log('ctrl', ctrl);
  const BreadcrumbList = [{ name: '首页', href: '/home' }, { name: '作品集' }];
  const toPreView = (url) => {
    window.open('http://' + url, 'blank');
  };
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Row gutter={12}>
        {portfolioList.map((item) => (
          <Col key={item.id} span={8}>
            <Card
              className="portfolio-card"
              size="small"
              cover={
                <div
                  className="out-rectangle "
                  onClick={() => toPreView(item.preUrl)}
                >
                  <img
                    className="inner-rectangle"
                    alt="example"
                    src={item.pictureUrl}
                  />
                </div>
              }
            >
              <Card.Meta
                title={
                  <div
                    className="article-list-title"
                    style={{ position: 'relative', padding: '0 20px 0 0 ' }}
                  >
                    <span>{item.name}</span>
                    <a href={item.resoureUrl} title="下载">
                      <Icon
                        type="download"
                        style={{ position: 'absolute', right: 0, bottom: 3 }}
                      />
                    </a>
                  </div>
                }
                description={
                  <div
                    title={item.description}
                    className="portfolio-description"
                  >
                    {item.description}
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </BasicLayout>
  );
};
