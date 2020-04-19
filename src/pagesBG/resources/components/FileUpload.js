import React, { useState } from 'react';
import {
  Upload,
  Icon,
  message,
  Select,
  Row,
  Col,
  Spin,
  notification,
} from 'antd';
import api from '../../api';
import { useModelState, useCtrl } from 'react-imvc/hook';
const { Dragger } = Upload;

export default () => {
  const { restapi } = useModelState();
  const { handleGetResource, handleDeleteResource, handleDownload } = useCtrl();
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
      if (status === 'done') {
        notification.success({
          message: '上传成功',
          description: `${info.file.name} 文件上传成功！.`,
        });
        handleGetResource();
      } else if (status === 'error') {
        notification.error({
          message: '上传失败',
          description: `${info.file.name} 文件上传失败！.`,
        });
      } else if (status === 'removed') {
        console.log('file.response.id', response.id);
        handleDeleteResource(response.id);
      }
      setLoading(false);
    },
    previewFile: (file) => {
      console.log('file', file);
    },
    showUploadList: {
      showPreviewIcon: false,
      showRemoveIcon: true,
      showDownloadIcon: false,
    },
  };
  return (
    <Spin spinning={loading}>
      <Row type="flex" justify="center" align="top" className="upload">
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
