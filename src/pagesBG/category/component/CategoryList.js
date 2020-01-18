import React, { useState } from 'react';
import { Table, Button } from 'antd';
import { useCtrl, useModelState } from 'react-imvc/hook';
import ArticleList from './ArticleList';
import Link from 'react-imvc/component/Link';
export default ({ add }) => {
  const state = useModelState();
  const handlers = useCtrl();
  const { categoryList } = state;
  const handleDelete = id => {};
  const columns = [
    {
      title: '类别',
      render: text => {
        return (
          <div>
            <span
              style={{
                display: 'inline-block',
                width: 48,
                height: 48,
                verticalAlign: 'middle',
                background: `no-repeat center/100% url(${text.avatar})`
              }}
            />
            <span style={{ verticalAlign: 'middle', marginLeft: 10 }}>
              {text.name}
            </span>
          </div>
        );
      }
    },
    {
      title: <span style={{ marginLeft: 15 }}>操作</span>,
      render: text => {
        return (
          <>
            <Button
              type="link"
              onClick={add.bind(this, text.id, text.name, ArticleList)}
            >
              管理
            </Button>
            <Button
              type="link"
              onClick={add.bind(this, text.id, text.name, ArticleList)}
            >
              编辑
            </Button>
            <Button
              type="link"
              style={{ color: 'red' }}
              onClick={handleDelete.bind(this, text.id)}
            >
              删除
            </Button>
          </>
        );
      }
    },
    {
      title: '文章数',
      dataIndex: 'articleCount'
    }
  ];
  const [selectedRow, setSelectedRow] = useState({
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  });
  const start = () => {
    setSelectedRow({ loading: true });
    setSelectedRow({
      selectedRowKeys: [],
      loading: false
    });
  };
  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRow({ selectedRowKeys });
  };
  const { loading, selectedRowKeys } = selectedRow;
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table
        rowKey="id"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={categoryList}
      />
    </>
  );
};
