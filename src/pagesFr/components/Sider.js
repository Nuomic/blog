import React from 'react';
import { Card, Tag, List } from 'antd';
import { Link } from 'react-imvc/component';
import moment from 'moment';
import { useModelState } from 'react-imvc/hook';
export default () => {
  let { siderData } = useModelState();
  siderData = siderData ? siderData : {};
  const { hotList, tagList, latestList, categoryList, links } = siderData;
  const handleToDetail = id => {
    return `/articledetail/${id}`;
  };
  const handleToSearch = (type, id) => {
    return `/article/${type}/${id}`;
  };
  const SiderItem = ({ name, dataSource, grid, Item }) => {
    return (
      <Card
        title={<span className="font-bold">{name}</span>}
        size="small"
        bordered={false}
      >
        <List
          split={false}
          grid={grid}
          size="small"
          dataSource={dataSource}
          renderItem={item => (
            <List.Item
              key={item.id}
              className={!grid ? 'article-list-item' : ''}
            >
              {Item(item)}
            </List.Item>
          )}
        />
      </Card>
    );
  };
  return (
    <div className="basic-sider">
      <SiderItem
        name="热门文章"
        dataSource={hotList}
        Item={item => (
          <div className="article-list-title">
            <Tag className="hot-title-index">
              {hotList && hotList.findIndex(i => item.id == i.id) + 1}
            </Tag>
            <Link to={handleToDetail(item.id)} className="link-color">
              {item.title}
            </Link>
          </div>
        )}
      />
      <Card
        title={<span className="font-bold">标签云集</span>}
        size="small"
        bordered={false}
      >
        {tagList &&
          tagList.map(item => (
            <Tag color={item.color} key={item.id} style={{ cursor: 'pointer' }}>
              <Link to={handleToSearch('tag', item.id)}>{item.name}</Link>
            </Tag>
          ))}
      </Card>

      <SiderItem
        name="最新文章"
        dataSource={latestList}
        Item={item => (
          <div className="article-list-title">
            <span className="latest-article-date">
              [ {moment(item.createdAt).format('YYYY-MM-DD')} ]
            </span>
            <Link to={handleToDetail(item.id)} className="link-color ">
              {item.title}
            </Link>
          </div>
        )}
      />
      <SiderItem
        name="分类专栏"
        dataSource={categoryList}
        Item={item => (
          <div style={{ width: '100%' }}>
            <Link
              to={handleToSearch('category', item.id)}
              className="link-color"
            >
              {item.name}
            </Link>
            <span style={{ float: 'right' }}>
              <span style={{ fontWeight: 600, fontSize: 16 }}>
                {item.articleCount}
              </span>
              <i>篇</i>
            </span>
          </div>
        )}
      />
      <SiderItem
        name="友情链接"
        grid={{ column: 2 }}
        dataSource={links}
        Item={item => (
          <a
            href={'http://' + item.siteUrl}
            className="link-color"
            target="blank"
          >
            {item.siteName}
          </a>
        )}
      />
    </div>
  );
};
