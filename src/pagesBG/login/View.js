import React from 'react';
import { Style } from 'react-imvc/component';
import { Form, Input, Card, Icon, Checkbox, Button } from 'antd';
import md5 from 'blueimp-md5';
import Captcha from './Captcha';
const { Item } = Form;
export default Form.create()(({ state, form, ctrl }) => {
  const { getFieldDecorator, resetFields, validateFields } = form;
  const { captcha } = state;
  console.log('captcha', captcha);
  const { handleLogin } = ctrl;
  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields(async (err, values) => {
      const { username, password } = values;
      if (!err) {
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
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="请输入用户名"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input.Password
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  // type="password"
                  placeholder="请输入密码"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator('yanzheng', {
                validateTrigger: 'onBlur',
                rules: [
                  {
                    validator: (rule, val, callback) => {
                      const code = captcha.join('').toLowerCase();
                      console.log('code', code);
                      if ((val && val.toLowerCase()) != code)
                        callback('验证码错误');
                      callback();
                    },
                  },
                ],
              })(
                <Input
                  onClick={() => resetFields(['yanzheng'])}
                  placeholder="请输入验证码"
                  style={{
                    display: 'inline-block',
                    width: 'calc(100% - 155px)',
                  }}
                />
              )}
              <div
                style={{ float: 'right', marginTop: 5 }}
                onClick={() => resetFields(['yanzheng'])}
              >
                <Captcha />
              </div>
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
