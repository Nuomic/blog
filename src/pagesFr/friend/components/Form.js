import React from 'react';
import { Form, Icon, Button, Input } from 'antd';
import { useCtrl } from 'react-imvc/hook';
const { Item } = Form;

export default Form.create()(({ form }) => {
  const { handleSaveFriend } = useCtrl();
  const { getFieldDecorator, validateFields, resetFields } = form;
  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, fieldsValue) => {
      if (!err) {
        handleSaveFriend({ ...fieldsValue, status: '1' });
        resetFields();
      }
    });
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 17 },
    },
  };
  return (
    <Form {...formItemLayout}>
      <Item /* label="昵称" */>
        {getFieldDecorator('nickname', {
          rules: [{ required: true, message: '请输入昵称' }],
          // initialValue: currentValue.nickname,
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="昵称"
          />
        )}
      </Item>
      <Item /* label="邮箱" */>
        {getFieldDecorator('email', {
          /*  initialValue: currentValue.email  */
          rules: [{ required: true, message: '请输入邮箱！' }],
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="邮箱地址"
          />
        )}
      </Item>
      <Item /* label="网站名称" */>
        {getFieldDecorator('siteName', {
          rules: [
            {
              required: true,
              message: '请输入网站名称！',
            },
          ],
          /* initialValue: currentValue.siteName, */
        })(
          <Input
            prefix={<Icon type="star" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="网站名称"
          />
        )}
      </Item>
      <Item /* label="网站地址" */>
        {getFieldDecorator('siteUrl', {
          rules: [{ required: true, message: '请输入网站地址！' }],
          /*  initialValue: currentValue.siteUrl, */
        })(
          <Input
            prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="网站地址"
          />
        )}
      </Item>
      <Item /* label="描述" */>
        {getFieldDecorator('description', {
          rules: [{ required: true, message: '请输入网站描述！' }],
          /*  initialValue: currentValue.description, */
        })(<Input.TextArea rows={4} placeholder="网站描述" />)}
      </Item>{' '}
      <Item /* label=" " */ colon={false}>
        <Button onClick={handleSubmit} type="primary">
          开始申请
        </Button>
      </Item>
    </Form>
  );
});
