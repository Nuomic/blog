import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useModelState, useCtrl } from 'react-imvc/hook';
const { Item } = Form;
const { TextArea } = Input;
export default Form.create()(({ form }) => {
  // const { state } = useModelState();
  const { handelGetSetting, handleSaveSetting } = useCtrl();
  const [data, setData] = useState({});
  console.log('data', data);
  useEffect(() => {
    handelGetSetting('about', setData);
  }, []);
  const { getFieldDecorator, validateFields } = form;
  const handleSubmit = e => {
    validateFields((err, values) => {
      e.preventDefault();
      if (err) return;
      console.log('values', values);
      handleSaveSetting('about', { ...values, id: data.id });
    });
  };
  return (
    <Form>
      <Item>
        {getFieldDecorator('userDesc', {
          initialValue: data.userDesc,
          rules: [{ required: true, message: '必填' }]
        })(<TextArea />)}
      </Item>
      <Item>
        {getFieldDecorator('blogDesc', {
          initialValue: data.blogDesc,
          rules: [{ required: true, message: '必填' }]
        })(<TextArea />)}
      </Item>
      <Item>
        {getFieldDecorator('alipay', {
          initialValue: data.alipay,
          rules: [{ required: true, message: '必填' }]
        })(<Input />)}
      </Item>
      <Item>
        {getFieldDecorator('weChat', {
          initialValue: data.weChat,
          rules: [{ required: true, message: '必填' }]
        })(<Input />)}
      </Item>
      <Item>
        <Button onClick={handleSubmit}>提交</Button>
      </Item>
    </Form>
  );
});
