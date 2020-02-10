import React, { useState } from 'react';
import { Table, Button } from 'antd';
import { useCtrl, useModelState } from 'react-imvc/hook';
import ArticleList from './ArticleList';
import CategoryForm from './CategoryForm';
export default ({ addTabs, showConfirm }) => {
  const state = useModelState();
  const handlers = useCtrl();
  const [modalStatus, setModalStatus] = useState(false);
  const [currentId, setCurrentId] = useState(undefined);
  const { categoryList } = state;
  const { handleDeleteCategory } = handlers;
  const handelModalStatus = id => {
    setCurrentId(id);
    setModalStatus(!modalStatus);
  };
  const columns = [
    {
      title: (
        <div>
          类别
          <Button
            ghost
            type="primary"
            onClick={handelModalStatus.bind(this, undefined)}
            size="small"
            icon="plus"
            style={{ marginLeft: 10 }}
          >
            新增
          </Button>
        </div>
      ),
      key: 'name',
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
      key: 'action',
      render: text => {
        return (
          <>
            <Button
              type="link"
              onClick={addTabs.bind(this, text.id, text.name, ArticleList)}
            >
              管理
            </Button>
            <Button type="link" onClick={handelModalStatus.bind(this, text.id)}>
              编辑
            </Button>
            <Button
              type="link"
              style={{ color: 'red' }}
              onClick={showConfirm.bind(
                this,
                text,
                '是否要删除该栏目？',
                handleDeleteCategory
              )}
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
  return (
    <>
      <CategoryForm
        modalStatus={modalStatus}
        handelModalStatus={handelModalStatus}
        categoryId={currentId}
      />
      <Table rowKey="id" columns={columns} dataSource={categoryList} />
    </>
  );
};
