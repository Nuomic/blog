import React from 'react';
import { Style } from 'react-imvc/component';
import { Form, Input, Card, Icon, Checkbox, Button } from 'antd';
import md5 from 'blueimp-md5';
const { Item } = Form;
export default Form.create()(({ state, form, handlers }) => {
  const { getFieldDecorator, resetFields, validateFields } = form;
  const { handleLogin } = handlers;
  const handleSubmit = e => {
    e.preventDefault();
    validateFields(async (err, values) => {
      const { username, password } = values;
      if (!err) {
        console.log('Received values of form: ', values);
        await handleLogin({ username, password: md5(password) });
      }
    });
  };
  return (
    <>
      <Style name="antd" />
      <Style name="antdPro" />
      <Style name="customize" />
      <Style name="commonBG" />
      <Style name="login" />
      <div className="login-bgimage">
        <Card className="login-box">
          <Form onSubmit={handleSubmit} className="login-form">
            <Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator('yanzheng', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Item>
            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Item>
          </Form>
        </Card>
      </div>
    </>
  );
});
