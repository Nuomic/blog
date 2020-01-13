import React from 'react';
import { Card, Tag, List } from 'antd';
import { Link } from 'react-imvc/component';
import connect from 'react-imvc/hoc/connect';
const withData = connect(({ state }) => {
  return {
    siderDate: state.siderDate
  };
});
const Sider = ({ siderDate }) => {
  const handleToDetail = id => {
    return `/articledetail/${id}`;
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
        dataSource={siderDate.hotList}
        Item={item => (
          <div className="article-list-title">
            <Tag className="hot-title-index">
              {siderDate.hotList &&
                siderDate.hotList.findIndex(i => item.id == i.id) + 1}
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
        {siderDate.tagList &&
          siderDate.tagList.map(item => (
            <Tag color={item.color} key={item.id} style={{ cursor: 'pointer' }}>
              {item.name}
            </Tag>
          ))}
      </Card>

      <SiderItem
        name="最新文章"
        dataSource={siderDate.latestList}
        Item={item => (
          <div className="article-list-title">
            <span className="latest-article-date">[ {item.date} ]</span>
            <Link to={handleToDetail(item.id)} className="link-color ">
              {item.title}
            </Link>
          </div>
        )}
      />
      <SiderItem
        name="分类专栏"
        dataSource={siderDate.categoryList}
        Item={item => (
          <div style={{ width: '100%' }}>
            <Link to={handleToDetail(item.id)} className="link-color">
              {item.name}
            </Link>
            <span style={{ float: 'right' }}>
              {item.articleCount} <i>篇</i>
            </span>
          </div>
        )}
      />
      <SiderItem
        name="友情链接"
        grid={{ column: 2 }}
        dataSource={siderDate.links}
        Item={item => (
          <a href={item.url} className="link-color">
            {item.name}
          </a>
        )}
      />
    </div>
  );
};
export default withData(Sider);
