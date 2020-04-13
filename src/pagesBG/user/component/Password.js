import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useModelState, useCtrl } from 'react-imvc/hook';
const { Item } = Form;
const { TextArea } = Input;
export default Form.create()(({ form }) => {
  const { handleChangePwd } = useCtrl();
  const {
    getFieldDecorator,
    validateFields,
    resetFields,
    getFieldValue,
  } = form;
  const handleSubmit = (e) => {
    validateFields((err, values) => {
      e.preventDefault();
      if (err) return;
      const { oldPassword, newPassword } = values;
      handleChangePwd(oldPassword, newPassword);
    });
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
      lg: { span: 10 },
    },
  };
  const compareToFirstPassword = (rule, value, callback) => {
    console.log('value', value);
    console.log("getFieldValue('newPassword')", getFieldValue('newPassword'));
    if (value && value !== getFieldValue('newPassword')) {
      callback('两次密码不一致！');
      console.log('========value====', value);
    } else {
      console.log('value++++++', value);
      callback();
    }
  };
  return (
    <Form {...formItemLayout}>
      <Item label="原密码">
        {getFieldDecorator('oldPassword', {
          rules: [{ required: true, message: '请输入账号当前密码' }],
        })(<Input.Password placeholder="请输入账号当前密码" />)}
      </Item>
      <Item label="新密码">
        {getFieldDecorator('newPassword', {
          rules: [{ required: true, message: '请输入新密码' }],
        })(<Input.Password placeholder="请输入新密码" />)}
      </Item>
      <Item label="确认新密码">
        {getFieldDecorator('newPassword1', {
          rules: [
            { required: true, message: '请再次确认新密码' },
            {
              validator: compareToFirstPassword,
            },
          ],
        })(<Input.Password placeholder="请再次确认新密码" />)}
      </Item>
      <Item colon={false} label=" ">
        <Button
          onClick={() => {
            resetFields();
          }}
        >
          重置
        </Button>
        <Button
          onClick={handleSubmit}
          type="primary"
          style={{ marginLeft: 20 }}
        >
          确认修改
        </Button>
      </Item>
    </Form>
  );
});
