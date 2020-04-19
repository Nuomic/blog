import { Upload, Icon, message } from 'antd';
import React, { useState } from 'react';
import api from '../../api';
import { useModelState } from 'react-imvc/hook';
export default ({ url, form }) => {
  console.log('url', url);
  const [loading, setLoading] = useState(false);
  const { getFieldDecorator, setFieldsValue, getFieldValue } = form;
  // getFieldDecorator('avatar');
  const { restapi } = useModelState();
  const props = {
    accept: 'image/*',
    name: 'file',
    data: (file) => {
      return { folder: 'image' };
    },
    action: restapi + api.uploadFile,
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
      } else if (status === 'error') {
        notification.error({
          message: '上传失败',
          description: `${info.file.name} 文件上传失败！.`,
        });
      }
      setLoading(false);
    },

    showUploadList: {
      showPreviewIcon: false,
      showRemoveIcon: true,
      showDownloadIcon: false,
    },
  };
  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <Upload
      {...props}
      listType="picture-card"
      className="avatar-uploader"
      fileList={getFieldValue('avatar')}
    >
      {getFieldValue('avatar') ? (
        <img
          src={getFieldValue('avatar')}
          alt="avatar"
          style={{ width: '100%' }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};
