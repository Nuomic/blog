import React from 'react';
import { Form, Modal, Button, Input } from 'antd';
import { useCtrl, useModelState } from 'react-imvc/hook';
import Upload from './Upload';
const { Item } = Form;

export default Form.create()(
  ({ form, currentValue, modalStatus, changModalStatus }) => {
    console.log('==============', currentValue);
    const { handleSaveFriend } = useCtrl();
    const { getFieldDecorator, validateFields, resetFields } = form;
    const handleSubmit = e => {
      validateFields(async (err, fieldsValue) => {
        e.preventDefault();
        if (err) return;
        if (!!currentValue.id) fieldsValue.friendId = currentValue.id;
        await handleSaveFriend(fieldsValue);
      });
      changModalStatus({});
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
    return (
      <Modal
        title={currentValue.id ? '编辑' : '新增'}
        visible={modalStatus}
        onOk={handleSubmit}
        onCancel={changModalStatus}
      >
        <Form {...formItemLayout}>
          <Item label="昵称">
            {getFieldDecorator('nickname', {
              initialValue: currentValue.nickname
            })(<Input />)}
          </Item>
          <Item label="邮箱">
            {getFieldDecorator('email', { initialValue: currentValue.email })(
              <Input />
            )}
          </Item>

          <Item label="网站名称">
            {getFieldDecorator('siteName', {
              initialValue: currentValue.siteName
            })(<Input />)}
          </Item>
          <Item label="网站名称">
            {getFieldDecorator('siteUrl', {
              initialValue: currentValue.siteUrl
            })(<Input />)}
          </Item>
          <Item label="描述">
            {getFieldDecorator('description', {
              initialValue: currentValue.description
            })(<Input.TextArea rows={4} />)}
          </Item>
        </Form>
      </Modal>
    );
  }
);
