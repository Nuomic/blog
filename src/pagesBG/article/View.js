import React from 'react';
import { Form } from 'antd';
import { Style } from 'react-imvc/component';
import Title from './components/Title';
import Editor from './components/Editor';
import SaveModal from './components/SaveModal';
export default Form.create()(({ form, state }) => {
  console.log('state', state);
  return (
    <div style={{ padding: 10, backgroundColor: '#f8f8f8' }}>
      <Style name="antd" />
      <Style name="antdPro" />
      <Style name="customize" />
      <Style name="commonBG" />
      <Title form={form} modalStatus={state.modalStatus} />
      <Editor form={form} />
      <SaveModal form={form} modalStatus={state.modalStatus} />
    </div>
  );
});
