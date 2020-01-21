import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Input, Select, Modal } from 'antd';
import { useCtrl, useModelState } from 'react-imvc/hook';
import { Link } from 'react-imvc/component';
const { confirm } = Modal;
const { Item } = Form;
const { Option } = Select;
export default ({ id }) => {
  const { categoryList } = useModelState();
  const {
    handleGetArticleList,
    handleChangeArticleListFromCategory
  } = useCtrl();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    return setSelectedRowKeys([]);
  }, [articleList]);
  useEffect(() => {
    handleGetArticleList(id, setArticleList);
  }, []);
  const hasSelected = selectedRowKeys.length > 0;
  const showConfirm = tocategoryId => {
    confirm({
      title: '是否将所选的文章移动到其他栏目',
      onOk: async () => {
        await handleChangeArticleListFromCategory(
          selectedRowKeys,
          id,
          tocategoryId,
          articleList,
          setArticleList
        );
      },
      onCancel() {}
    });
  };
  const ActionForm = Form.create()(({ form }) => {
    const { getFieldDecorator, validateFields } = form;
    const handleSubmit = e => {
      e.preventDefault();
      validateFields((err, values) => {
        if (!err) {
          showConfirm(values.categoryId);
        }
      });
    };
    return (
      <Form layout="inline" onSubmit={handleSubmit}>
        <Item>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `将这 ${selectedRowKeys.length} 项移动到` : ''}
          </span>
          {getFieldDecorator('categoryId', {
            rules: [{ required: true, message: '请选择要移动到的栏目' }]
          })(
            <Select placeholder="选择要移动到的栏目" style={{ width: 200 }}>
              {categoryList &&
                categoryList
                  .filter(item => item.id != id)
                  .map(item => <Option key={item.id}>{item.name}</Option>)}
            </Select>
          )}
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            应用
          </Button>
        </Item>
      </Form>
    );
  });

  const columns = [
    {
      title: <ActionForm />,
      colSpan: 2,
      align: 'left',
      dataIndex: 'title',
      width: '70%'
    },
    {
      title: '',
      colSpan: 0,
      render: text => {
        return (
          <Link to={`/articledetail/${text.id}`} target="blank">
            查看
          </Link>
        );
      }
    }
  ];
  const onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  return (
    <Table
      rowKey="id"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={articleList}
    />
  );
};
