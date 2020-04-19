import React, { useState } from 'react';
import {
  Menu,
  Card,
  Dropdown,
  Typography,
  Icon,
  Modal,
  Input,
  message,
} from 'antd';
import moment from 'moment';
import copy from 'copy-to-clipboard';
const { confirm } = Modal;

import { useCtrl } from 'react-imvc/hook';
const { Paragraph } = Typography;
export default ({ item }) => {
  console.log('iteem', item.id);
  const {
    handleDeleteResource,
    handleChangeResourceStatus,
    handleDownload,
  } = useCtrl();

  var newName;
  //右键菜单
  const menuConfig = [
    {
      icon: 'edit',
      title: '重命名',
      color: 'green',
    },
    {
      icon: 'download',
      title: (
        <a href={item.path} download={item.originalname} target="_blank">
          查看/下载
        </a>
      ),
      color: 'blue',
    },
    {
      icon: 'copy',
      title: (
        <span
          onClick={() => {
            copy(item.path);
          }}
        >
          复制文件连接
        </span>
      ),
      // color: 'green',
    },
    {
      icon: 'delete',
      title: '删除',
      color: 'red',
    },
  ];
  //为回收时 增加还原按钮
  if (item.isTrash)
    menuConfig.splice(2, 0, { icon: 'undo', title: '还原', color: 'purple' });

  const handleAction = (key) => {
    console.log('key', key);

    switch (key) {
      case 0:
        confirm({
          content: (
            <Input
              suffix={item.ext}
              defaultValue={item.originalname.split('.').slice(0, -1)}
              onChange={(e) => (newName = e.target.value)}
            />
          ),
          icon: null,
          onOk: async () => {
            console.log('newName', newName);
            await handleChangeResourceStatus({
              resourceId: item.id,
              originalname: newName + item.ext,
            });
          },
          onCancel() {},
        });
        break;
      case 3:
        handleChangeResourceStatus({
          resourceId: item.id,
          isTrash: !item.isTrash,
        });

        break;
      case 4:
        confirm({
          title: '是否删除' + item.originalname,
          content: '一经删除，该资源无法找回',
          okType: 'danger',
          onOk: async () => {
            console.log('newName', newName);
            await handleDeleteResource(item.id);
          },
          onCancel() {},
        });

      default:
        break;
    }
  };

  const menu = (
    <Menu>
      {menuConfig.map((item, index) => (
        <Menu.Item
          key={index}
          style={{ color: item.color }}
          onClick={handleAction.bind(this, index)}
        >
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
  function fileSize(fileSizeInBytes) {
    var i = -1;
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(2) + byteUnits[i];
  }
  return (
    <Dropdown
      overlay={menu}
      trigger={['contextMenu']}
      className="home-card inline-block"
    >
      <div
        title={`${item.originalname}\n文件类型：${
          item.type
        }\n文件大小：${fileSize(item.size)}\n修改日期：${moment(
          item.editTime
        ).format('YYYY/MM/DD HH:mm:ss')}`}
      >
        <Card className="file-card">
          <div style={{ height: 80 }}>
            <img
              src={`/static/images/filetype/${item.ext.split('.')[1]}.png`}
              width="100%"
            />
          </div>
          <Paragraph ellipsis={{ rows: 3 }} /* editable */>
            {item.originalname}
          </Paragraph>
        </Card>
      </div>
    </Dropdown>
  );
};
