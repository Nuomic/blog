import React from 'react';
import { Link } from 'react-imvc/component';
import { Breadcrumb, Row, Col, BackTop } from 'antd';
import { themeColor } from '../config';
import StarBG from './StarBG';
import Header from './Header';
import Footer from './Footer';
import Sider from './Sider';
export default ({ children, BreadcrumbList }) => {
  return (
    <StarBG>
      <Header />
      <div style={{ width: '70%', minWidth: 1180, margin: 'auto' }}>
        {BreadcrumbList && (
          <Breadcrumb separator=">" className="basic-layout-breadcrumb-bg">
            {BreadcrumbList.map((item, index) => (
              <Breadcrumb.Item key={index}>
                <Link to={item.href}>{item.name}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}
        <Row style={{ overflow: 'hidden' }}>
          <Col span={17}>
            <div
              className="basic-layout-article-bg"
              style={{ backgroundColor: themeColor.articleBgColor }}
            >
              {children}
            </div>
          </Col>
          <Col span={7}>
            <div
              className="basic-layout-sider-bg"
              style={{ background: themeColor.siderBgColor }}
            >
              <Sider />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
      <BackTop style={{ articleBgColor: '#fff' }} />
    </StarBG>
  );
};
