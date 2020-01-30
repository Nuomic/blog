import React, { useState } from 'react';
import { Form, Button, Icon, Input } from 'antd';
import { Style } from 'react-imvc/component';
export default ({ state }) => {
  console.log('state', state);
  const Editor = state.Editor.default;
  const [value, setValue] = useState();
  const handleChange = value => {
    setValue(value);
  };
  const EditForm = Form.create()(({ form }) => {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = form;
    const handleSubmit = (type, e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
    // Only show error after a field is touched.
    const usernameError =
      isFieldTouched('username') && getFieldError('username');
    const passwordError =
      isFieldTouched('password') && getFieldError('password');
    return (
      <Form
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Form.Item style={{ flex: 10 }}>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<Input size="large" placeholder="请输入标题" />)}
        </Form.Item>
        <Form.Item style={{ flex: 1 }}>
          <Button size="large" className="fr">
            保存草稿
          </Button>
        </Form.Item>
        <Form.Item style={{ flex: 1 }}>
          <Button size="large" type="primary" className="fr">
            发表文章
          </Button>
        </Form.Item>
      </Form>
    );
  });
  return (
    <div style={{ padding: 10, backgroundColor: '#f8f8f8' }}>
      <Style name="antd" />
      <Style name="antdPro" />
      <Style name="customize" />
      <Style name="commonBG" />
      <EditForm />
      <Editor
        value={value}
        onChange={value => handleChange(value)}
        subfield
        preview
      />
    </div>
  );
};
