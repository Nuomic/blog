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
  } = useModelState();
  const ItemCard = ({ span = {}, icon, color = '#3f8600', ...props }) => (
    <Col xs={12} xxl={3} md={8} {...span}>
      <Card>
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
        span={{ xs: 24, xxl: 4, md: 24, lg: 8 }}
        value={pvTotal}
        title={'站点总访问'}
        icon="eye"
        color="#eb2f96"
      />{' '}
      <ItemCard
        span={{ xxl: 4 }}
        value={resourceTotal}
        title={'资源总数'}
        icon="folder-open"
        color="#f5222d"
      />
      <ItemCard
        span={{ xxl: 4 }}
        value={commentTotal}
        title={'留言总数'}
        icon="message"
        color="#fa541c"
      />
      <ItemCard
        span={{ lg: 6 }}
        value={friendTotal}
        title={'友链总数'}
        icon="link"
        color="#fa8c16"
      />
      <ItemCard
        span={{ lg: 6 }}
        value={tagTotal}
        title={'标签总数'}
        icon="tags"
        color="#faad14"
      />
      <ItemCard
        span={{ lg: 6 }}
        value={articleTotal}
        title={'文章总数'}
        icon="read"
        color="#a0d911"
      />
      <ItemCard
        span={{ lg: 6 }}
        value={categoryTotal}
        title={'栏目总数'}
        icon="book"
        color="#52c41a"
      />
    </Row>
  );
};
