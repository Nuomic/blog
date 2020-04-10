import React from 'react';
import { Tag } from 'antd';
import { Link } from 'react-imvc/component';
import { useModelState } from 'react-imvc/hook';
export default () => {
  const { siderData = {} } = useModelState();
  const { links = [] } = siderData;
  const colors = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'geekblue',
    'blue',
    'purple',
  ];
  console.log('links', links);
  return links.map((item, index) => (
    <Tag color={colors[index % 11]} key={item.id} style={{ margin: 4 }}>
      <a
        href={'http://' + item.siteUrl}
        target="blank"
        style={{ color: 'inherit', padding: '2px 10px' }}
      >
        {item.siteName}
      </a>
    </Tag>
  ));
};
