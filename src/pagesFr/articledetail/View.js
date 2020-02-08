import React from 'react';
import BasicLayout from '../components/BasicLayout';
import { Card, Typography, Tag } from 'antd';
import ReactMarkdown from 'react-markdown';
import Comments from '../components/Comments';
import { Link, Style } from 'react-imvc/component';
import CodeBlock from './component/CodeBlock';
const { Title, Paragraph } = Typography;
export default props => {
  console.log('props', props);

  const { articleDetail } = props.state;
  const { categoryInfo, next, pre, tagList } = articleDetail;
  const BreadcrumbList = [
    { name: '首页', href: '/home' },
    { name: '博文', href: '/home' },
    { name: articleDetail.title }
  ];
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
        <Style name="markdown" />
        <ReactMarkdown
          className="for-markdown-preview"
          source={articleDetail.content}
          escapeHtml={false}
          renderers={{
            code: CodeBlock
          }}
        />
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
      <Comments />
    </BasicLayout>
  );
};
