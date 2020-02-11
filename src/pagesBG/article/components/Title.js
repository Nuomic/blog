import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { useCtrl } from 'react-imvc/hook';
export default ({ form, title }) => {
  const { handleChangeModalStatus, handleSaveArticle } = useCtrl();
  const { getFieldDecorator, setFieldsValue, validateFields } = form;

  const saveArticle = (status, e) => {
    validateFields(['title', 'content'], { first: true }, (err, values) => {
      e.preventDefault();
      if (err) {
        if (err.content) message.error(err.content.errors[0].message);
        console.log('err', err);
        return;
      }
      // setFieldsValue({ status });
      // console.log('values', values);
      (status == '3' && handleSaveArticle({ ...values, status: '3' })) ||
        handleChangeModalStatus();
    });
  };

  return (
    <Form
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Form.Item style={{ flex: 10 }}>
        {getFieldDecorator('title', {
          rules: [{ required: true, message: '文章标题不能为空!' }],
          initialValue: title
        })(<Input size="large" placeholder="请输入标题" />)}
      </Form.Item>
      <Form.Item style={{ flex: 1 }}>
        <Button
          size="large"
          className="fr"
          onClick={saveArticle.bind(this, '3')}
        >
          保存草稿
        </Button>
      </Form.Item>
      <Form.Item style={{ flex: 1 }}>
        <Button
          size="large"
          type="primary"
          className="fr"
          onClick={saveArticle.bind(this, null)}
        >
          发表文章
        </Button>
      </Form.Item>
    </Form>
  );
};
