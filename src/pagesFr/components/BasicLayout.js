import React from 'react';
import { Link } from 'react-imvc/component';
import { Breadcrumb, Row, Col } from 'antd';
import StarBG from './StarBG';
import Header from './Header';
import Footer from './Footer';
import Sider from './Sider';
export default ({ children, BreadcrumbList }) => {
  return (
    <StarBG>
      <Header />
      <div style={{ width: '78%', minWidth: 1200, margin: 'auto' }}>
        {BreadcrumbList && (
          <Breadcrumb
            separator=">"
            style={{
              padding: 10,
              marginTop: 10,
              backgroundColor: 'rgba(255,255,255,.5)',
              boxShadow: '1px 2px 6px rgba(63,74,105,.16)',
              borderRadius: 3
            }}
          >
            {BreadcrumbList.map(item => (
              <Breadcrumb.Item>
                <Link to={item.href}>{item.name}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}
        <Row style={{ overflow: 'hidden' }}>
          <Col
            span={18}
            style={{ paddingBottom: 9999, marginBottom: '-9999px' }}
          >
            {children}
          </Col>
          <Col
            span={6}
            style={{ paddingBottom: 9999, marginBottom: '-9999px' }}
          >
            <Sider></Sider>
          </Col>
        </Row>
      </div>
      <Footer />
    </StarBG>
  );
};
