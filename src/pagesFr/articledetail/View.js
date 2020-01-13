import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { Card, Typography, Tag } from 'antd';
import Comment from '../components/Comment';
import { Link } from 'react-imvc/component';
const { Title, Paragraph } = Typography;
export default props => {
  console.log('props', props);
  const BreadcrumbList = [
    { name: '首页', href: '/home' },
    { name: '博文', href: '/home' },
    { name: '博文' }
  ];
  const { articleDetail } = props.state;
  const { categoryInfo, next, pre, tagList } = articleDetail;
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Card
        title={
          <div style={{ textAlign: 'center' }}>
            <Title level={4} ellipsis>
              {articleDetail.title}
            </Title>
            <span>{categoryInfo.name}</span>
            <span>{articleDetail.date}</span>
            <span>{categoryInfo.name}</span>
            <span>{categoryInfo.name}</span>
            <div>
              {tagList.map(item => (
                <Tag key={item.id} color={item.color}>
                  {item.name}
                </Tag>
              ))}
            </div>
          </div>
        }
      >
        <Paragraph>{articleDetail.content}</Paragraph>
      </Card>
      <Card size="small">
        <span>
          上一篇:
          {(pre && <Link to={`/articledetail/${pre.id}`}>{pre.title}</Link>) ||
            '没有了'}
        </span>
        <span style={{ float: 'right' }}>
          下一篇:
          {(next && (
            <Link to={`/articledetail/${next.id}`}>{next.title}</Link>
          )) ||
            '没有了'}
        </span>
      </Card>
      <Comment />
    </BasicLayout>
  );
};
