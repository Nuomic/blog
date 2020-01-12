import React, { useState } from 'react';
import Editor from './components/Editor';
import { Button } from 'antd';
// import { Style } from 'react-imvc/component';

export default () => {
  const [status, setStatus] = useState(false);
  const handleShow = () => {
    setStatus(!status);
  };
  return (
    <>
      {status && <Editor />}
      <Button onClick={handleShow}>点击</Button>
    </>
  );
};
