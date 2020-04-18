import React, { useState } from 'react';
import { Upload, Icon, message, Select, Row, Col, Spin } from 'antd';
import api from '../../api';
import { useModelState, useCtrl } from 'react-imvc/hook';
const { Dragger } = Upload;

export default () => {
  const { restapi } = useModelState();
  const { handleGetResource } = useCtrl();
  const [loading, setLoading] = useState(false);
  console.log('loading', loading);
  const props = {
    accept: 'image/*,video/*,audio/*,text/*,.zip,.rar,.doc,.docx,.pdf',
    name: 'file',
    multiple: true,
    // fileList: [],
    data: (file) => {
      let ext = file.name.split('.').slice(-1);
      const judgeTpye = (...arg) => arg.some((item) => ext == item);
      console.log('object', file.type.split('/')[0]);
      let folder = judgeTpye('zip', 'rar')
        ? 'compressed'
        : judgeTpye('pdf')
        ? 'image'
        : judgeTpye('doc', 'docx')
        ? 'text'
        : judgeTpye('amr')
        ? 'audio'
        : file.type.split('/')[0];
      return { folder };
    },
    action: restapi + api.uploadFile,
    beforeUpload: (file) => {
      console.log('file', file);
    },
    onChange(info) {
      const { status, response } = info.file;
      console.log('info', info);
      console.log('status', status);
      setLoading(true);
      if (response) {
        const { status } = response;
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
          handleGetResource();
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
        setLoading(false);
      }
    },
  };
  return (
    <Spin spinning={loading}>
      <Row type="flex" justify="center" align="top">
        <Col xs={24} lg={12}>
          <Dragger {...props} style={{ minHeight: 300 }}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">单击或将文件拖到该区域以上传</p>
            <p className="ant-upload-hint">支持单次或批量上传。</p>
          </Dragger>
        </Col>
      </Row>
    </Spin>
  );
};
