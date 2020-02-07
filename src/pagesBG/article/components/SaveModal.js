import React from 'react';
import { Form, Modal, Button, Input, Radio, Select } from 'antd';
import { useCtrl, useModelState } from 'react-imvc/hook';
const { Item } = Form;
const { Option } = Select;
export default ({ form, modalStatus }) => {
  const { handleChangeModalStatus, handleSaveArticle } = useCtrl();
  const { article } = useModelState();
  const { getFieldDecorator, validateFields, resetFields } = form;
  const handleSubmit = e => {
    validateFields(async (err, fieldsValue) => {
      e.preventDefault();
      if (err) return;
      // if (!!currentValue.id) fieldsValue.friendId = currentValue.id;
      await handleSaveArticle(fieldsValue);
    });
    // resetFields();
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };
  const statusList = [
    { key: '1', name: '已发布' },
    { key: '2', name: '私密' }
  ];
  const tagList = [
    { key: '1', name: '已发布' },
    { key: '2', name: '私密' }
  ];
  const categoryList = [
    { key: '5e3bd9cff7cb7e21689c156b', name: '已发布' },
    { key: '2', name: '私密' }
  ];
  return (
    <Modal
      title={/* currentValue.id ? '编辑' : */ '新增'}
      visible={modalStatus}
      onOk={handleSubmit}
      onCancel={handleChangeModalStatus}
    >
      <Form {...formItemLayout}>
        <Item label="所属栏目">
          {getFieldDecorator('categoryId', {
            initialValue: undefined
          })(
            <Select>
              {categoryList &&
                categoryList.map(item => (
                  <Option key={item.key}>{item.name}</Option>
                ))}
            </Select>
          )}
        </Item>
        <Item label="标签">
          {getFieldDecorator('tagIds', {
            initialValue: []
          })(
            // <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
            <Select mode="tags" tokenSeparators={[',']}>
              {tagList &&
                tagList.map(item => (
                  <Option key={item.key}>{item.name}</Option>
                ))}
            </Select>
          )}
        </Item>

        <Item label="发布形式">
          {getFieldDecorator('status', {
            // initialValue: currentValue.siteUrl
          })(
            <Radio.Group>
              {statusList.map(item => (
                <Radio key={item.key} value={item.key}>
                  {item.name}
                </Radio>
              ))}
            </Radio.Group>
          )}
        </Item>
        <Item label="摘要">
          {getFieldDecorator('summary', {
            // initialValue: currentValue.description
          })(<Input.TextArea rows={4} />)}
        </Item>
      </Form>
    </Modal>
  );
};
