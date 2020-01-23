import React from 'react';
import { Form, Modal, Button, Input } from 'antd';
import { useCtrl, useModelState } from 'react-imvc/hook';
import Upload from './Upload';
const { Item } = Form;

export default Form.create()(
  ({ form, categoryId, modalStatus, handelModalStatus }) => {
    // console.log('categoryId', categoryId);
    const { categoryList } = useModelState();
    const { handleSaveCategory } = useCtrl();
    const category =
      (categoryList && categoryList.find(item => item.id == categoryId)) || {};
    const { getFieldDecorator, validateFields, resetFields } = form;

    const handleSubmit = e => {
      validateFields(async (err, fieldsValue) => {
        e.preventDefault();
        if (err) return;
        console.log('fieldsValue', fieldsValue);
        // console.log('object', { id: categoryId, ...fieldsValue });
        await handleSaveCategory(
          { ...category, ...fieldsValue },
          handelModalStatus
        );
        resetFields();
      });
    };
    return (
      <Modal
        title={categoryId ? '编辑' : '新增'}
        visible={modalStatus}
        onOk={handleSubmit}
        onCancel={handelModalStatus}
      >
        <Form>
          <Item label="栏目名称">
            {getFieldDecorator('name', { initialValue: category.name })(
              <Input />
            )}
          </Item>
          <Item label="栏目简介">
            {getFieldDecorator('summary', { initialValue: category.summary })(
              <Input />
            )}
          </Item>
          <Item label="栏目配图">
            <Upload form={form} url={category.avatar}></Upload>
          </Item>
        </Form>
      </Modal>
    );
  }
);
