import React from 'react';
import BasicLayout from '../components/BasicLayout';
import StickyTabs from '../components/StickyTabs';
import { useModelState } from 'react-imvc/hook';
import { Tabs, Modal, Menu, Dropdown, Card } from 'antd';
import FileUpload from './components/FileUpload';
import FileItem from './components/FileItem';
const { confirm } = Modal;
const { TabPane } = Tabs;
export default () => {
  const { resourceList = [] } = useModelState();
  const bdList = [{ name: '首页', href: '/admin' }, { name: '资源管理' }];
  console.log('resourceList', resourceList);
  const resourceStatus = [
    { tabName: '全部', key: '0' },
    { tabName: '图片', key: 'image' },
    { tabName: '文本', key: 'text' },
    { tabName: '音频', key: 'audio' },
    { tabName: '视频', key: 'video' },
    { tabName: '压缩文件', key: 'compressed' },
    { tabName: '回收站', key: '-1' },
    { tabName: '上传资源', key: 'upload' },
  ];
  const filterData = (key) => {
    if (key == '0') return resourceList;
    if (key == '-1') return resourceList.filter((item) => item.isTrash);
    return resourceList.filter((item) => item.type == key);
  };

  return (
    <BasicLayout breadcrumbList={bdList}>
      <StickyTabs>
        {resourceStatus &&
          resourceStatus.map((item) => (
            <TabPane
              tab={
                item.tabName +
                ((item.key !== 'upload' &&
                  ` (${filterData(item.key).length})`) ||
                  '')
              }
              key={item.key}
            >
              {(item.key == 'upload' && <FileUpload />) ||
                filterData(item.key).map((item) => (
                  <FileItem item={item} key={item.id} />
                ))}
            </TabPane>
          ))}
      </StickyTabs>
    </BasicLayout>
  );
};
