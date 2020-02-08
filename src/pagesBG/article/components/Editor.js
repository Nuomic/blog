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
  const { Editor, article } = useModelState();
  getFieldDecorator('content', {
    rules: [{ required: true, message: '文章内容不能为空!' }],
    initialValue: article.content
  });

  const handleChange = content => {
    setFieldsValue({ content });
  };
  const saveArticle = e => {
    setFieldsValue({ status: article.id ? article.status : '3' });
    validateFields(async (err, fieldsValue) => {
      if (err) return;
      await handleSaveArticle(fieldsValue);
    });
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
