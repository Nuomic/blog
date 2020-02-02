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
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };
  return (
    <Form {...formItemLayout}>
      <Item label="个人简介">
        {getFieldDecorator('userDesc', {
          initialValue: data.userDesc,
          rules: [{ required: true, message: '必填' }]
        })(<TextArea rows={10} />)}
      </Item>
      <Item label="博客简介">
        {getFieldDecorator('blogDesc', {
          initialValue: data.blogDesc,
          rules: [{ required: true, message: '必填' }]
        })(<TextArea rows={10} />)}
      </Item>
      <Item label="支付宝Url">
        {getFieldDecorator('alipay', {
          initialValue: data.alipay,
          rules: [{ required: true, message: '必填' }]
        })(<Input />)}
      </Item>
      <Item label="微信Url">
        {getFieldDecorator('weChat', {
          initialValue: data.weChat,
          rules: [{ required: true, message: '必填' }]
        })(<Input />)}
      </Item>
      <Item colon={false} label=" ">
        <Button onClick={() => {}}>重置</Button>
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
