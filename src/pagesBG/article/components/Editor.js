import React from 'react';
import { useModelState } from 'react-imvc/hook';
export default ({ form }) => {
  const { getFieldDecorator, getFieldValue, setFieldsValue } = form;
  getFieldDecorator('content', {
    rules: [{ required: true, message: '文章内容不能为空!' }]
  });
  const { Editor } = useModelState();
  const handleChange = content => {
    setFieldsValue({ content });
  };
  return (
    <Editor.default
      value={getFieldValue('content')}
      onChange={content => handleChange(content)}
      subfield
      preview
    />
  );
};
