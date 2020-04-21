import React from 'react';

import { useModelState } from 'react-imvc/hook';
import { Statistic, Card, Row, Col, Icon } from 'antd';

export default () => {
  const {
    pvTotal,
    articleTotal,
    commentTotal,
    friendTotal,
    tagTotal,
    resourceTotal,
    categoryTotal,
    portfolioTotal,
    todayPvTotal,
  } = useModelState();
  const ItemCard = ({ span = {}, icon, color = '#3f8600', ...props }) => (
    <Col xs={12} xxl={6} {...span}>
      <Card style={{ height: 128 }}>
        <Statistic
          valueStyle={{ color }}
          prefix={<Icon type={icon} />}
          {...props}
        />
      </Card>
    </Col>
  );

  return (
    <Row gutter={12}>
      <ItemCard
        value={todayPvTotal}
        title={'今日访问'}
        icon="eye"
        color="#eb2f96"
      />
      <ItemCard
        value={resourceTotal}
        title={'资源总数'}
        icon="folder-open"
        color="#f5222d"
      />
      <ItemCard
        value={commentTotal}
        title={'留言总数'}
        icon="message"
        color="#fa541c"
      />
      <ItemCard
        value={friendTotal}
        title={'友链总数'}
        icon="link"
        color="#fa8c16"
      />
      <ItemCard
        value={tagTotal}
        title={'标签总数'}
        icon="tags"
        color="#faad14"
      />
      <ItemCard
        value={articleTotal}
        title={'文章总数'}
        icon="read"
        color="#a0d911"
      />
      <ItemCard
        value={categoryTotal}
        title={'栏目总数'}
        icon="book"
        color="#52c41a"
      />
      <ItemCard
        value={portfolioTotal}
        title={'作品总数'}
        icon="gift"
        color="#52c41a"
      />
      <ItemCard
        span={{ xs: 24, xxl: 24, md: 24 }}
        value={pvTotal}
        title={'站点总访问'}
        icon="eye"
        color="#722ed1"
      />
    </Row>
  );
};
