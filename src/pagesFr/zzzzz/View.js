import React from 'react';
import { Row, Col, Table, Input, Button } from 'antd';
import { Style } from 'react-imvc/component';
import MyTable from './components/MyTable';
import { func } from 'prop-types';
export default props => {
  const data = [
    {
      id: 1,
      name: 'zhangsan',
      age: 18,
      address: '上海',
      family: [
        {
          father: 'zhangsss',
          mother: 'lissss',
          children: 'zhangaaa'
        },
        {
          father: 'zhangsss',
          mother: 'lissss',
          children: 'zhangaaa'
        },
        {
          father: 'zhangsss',
          mother: 'lissss',
          children: 'zhangaaa'
        }
      ]
    },
    {
      id: 2,
      name: 'dasd',
      age: 11,
      address: '背景',
      family: [
        {
          father: 'dasd',
          mother: 'dsad',
          children: 'zhadasdngaaa'
        }
      ]
    },
    {
      id: 3,
      name: 'dasda',
      age: 33,
      address: '南仓',
      family: [
        {
          father: '实打实',
          mother: 'li实打实ssss',
          children: '大'
        }
      ]
    }
  ];
  const row = [
    {
      title: 'name'
    },
    {
      title: 'age'
    },
    {
      title: 'address'
    },
    {
      render: text => {
        console.log('text', text);
        return <Button>ssss</Button>;
      }
    }
  ];
  const columns = [
    {
      title: '父亲',
      dataIndex: 'father'
    },
    {
      title: '母亲',
      dataIndex: 'mother'
    },
    {
      title: '孩子',
      dataIndex: 'children',
      render: text => {
        return text.children;
      }
    },
    {
      title: '操作',
      render: text => {
        return <Button onClick={handleClick.bind(this, text)}></Button>;
      }
    }
  ];
  const colSpan = 3;
  const colName = 'family';
  const handleClick = text => {
    console.log(text);
  };
  return (
    <MyTable
      data={data}
      row={row}
      columns={columns}
      colSpan={colSpan}
      colName={colName}
    />
  );
};
