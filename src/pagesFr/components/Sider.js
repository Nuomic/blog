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
  const SiderItem = ({ name, dataSource, grid, renderItem }) => {
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
            <List.Item key={item.id}>{renderItem(item)}</List.Item>
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
        renderItem={item => (
          <Link to={handleToDetail(item.id)} className="link-color">
            {item.title}
          </Link>
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
        renderItem={item => (
          <Link to={handleToDetail(item.id)} className="link-color">
            {item.title}
          </Link>
        )}
      />

      <SiderItem
        name="友情链接"
        grid={{ column: 2 }}
        dataSource={siderDate.links}
        renderItem={item => (
          <a href={item.url} className="link-color">
            {item.name}
          </a>
        )}
      />
    </div>
  );
};
export default withData(Sider);
