import React from 'react';
import { useModelState, useCtrl } from 'react-imvc/hook';
export default ({ form }) => {
  const { handleSaveArticle } = useCtrl();
  const {
    getFieldDecorator,
    getFieldValue,
    setFieldsValue,
    validateFields
  } = form;
  getFieldDecorator('content', {
    rules: [{ required: true, message: '文章内容不能为空!' }]
  });
  const { Editor } = useModelState();
  const handleChange = content => {
    setFieldsValue({ content });
  };
  const saveArticle = e => {
    setFieldsValue({ status: '3' });
    validateFields(async (err, fieldsValue) => {
      // e.preventDefault();
      if (err) return;
      await handleSaveArticle(fieldsValue);
    });
    resetFields();
  };
  const addImg = () => {};
  return (
    <Editor.default
      style={{ height: 'calc(100vh - 70px)' }}
      onSave={saveArticle}
      addImg={addImg}
      value={getFieldValue('content')}
      onChange={content => handleChange(content)}
      subfield
      preview
    />
  );
};
