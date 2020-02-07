import { Upload, Icon, message } from 'antd';
import React, { useState } from 'react';
import api from '../../api';
import { useModelState } from 'react-imvc/hook';
export default ({ url, form }) => {
  const [state, setState] = useState({ loading: false });
  const { getFieldDecorator, setFieldsValue, getFieldValue } = form;
  // getFieldDecorator('avatar');
  const { restapi } = useModelState();
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setState({
          loading: false
        });
        setFieldsValue({ avatar: imageUrl });
      });
    }
  };
  const uploadButton = (
    <div>
      <Icon type={state.loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action={restapi + api.uploadFile}
      // beforeUpload={beforeUpload}
      // onChange={handleChange}
      // fileList={getFieldValue('avatar')}
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
