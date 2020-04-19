import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useModelState, useCtrl } from 'react-imvc/hook';
const { Item } = Form;
const { TextArea } = Input;
export default Form.create()(({ form }) => {
  const { userInfo = {} } = useModelState();
  const { handleChangUserInfo } = useCtrl();
  const { getFieldDecorator, validateFields, resetFields } = form;
  const handleSubmit = (e) => {
    validateFields((err, values) => {
      e.preventDefault();
      if (err) return;
      if (values.username === userInfo.username) delete values.username;
      console.log('values', values);
      handleChangUserInfo({ ...values, userId: userInfo.id });
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
    },
  };

  return (
    <Form {...formItemLayout}>
      <Item label="用户名">
        {getFieldDecorator('username', {
          initialValue: userInfo.username,
          rules: [{ required: true, message: '必填' }],
        })(<Input />)}
      </Item>

      <Item label="昵称">
        {getFieldDecorator('nickname', {
          initialValue: userInfo.nickname,
          rules: [{ required: true, message: '必填' }],
        })(<Input />)}
      </Item>

      <Item label="邮箱">
        {getFieldDecorator('email', {
          initialValue: userInfo.email,
          rules: [
            { required: true, message: '必填' },
            {
              pattern: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
              message: '请输入正确的号码格式',
            },
          ],
        })(<Input />)}
      </Item>

      <Item label="电话号码">
        {getFieldDecorator('phonenumber', {
          initialValue: userInfo.phonenumber,
          rules: [
            { required: true, message: '必填' },
            {
              pattern: /^1(3|4|5|6|7|8|9)\d{9}$/,
              message: '请输入正确的号码格式',
            },
          ],
        })(<Input />)}
      </Item>

      <Item label="头像">
        {getFieldDecorator('avatar', {
          initialValue: userInfo.avatar,
          rules: [{ required: true, message: '必填' }],
        })(<Input />)}
      </Item>

      <Item colon={false} label=" ">
        <Button onClick={() => resetFields()}>重置</Button>
        <Button
          onClick={handleSubmit}
          type="primary"
          style={{ marginLeft: 20 }}
        >
          提交
        </Button>
      </Item>
    </Form>
  );
});
