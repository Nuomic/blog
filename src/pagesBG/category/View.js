import React, { useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import { Tabs, Modal } from 'antd';
import CategoryList from './component/CategoryList';
import StickyTabs from '../components/StickyTabs';
const { confirm } = Modal;
const { TabPane } = Tabs;
export default ({ state }) => {
  console.log('state', state);
  const bdList = [{ name: '首页', href: '/admin' }, { name: '栏目管理' }];
  const [activeKey, setActiveKey] = useState('0');
  const [tabList, setTabList] = useState([
    { key: '0', name: '栏目', content: CategoryList }
  ]);
  //删除提示框
  const showConfirm = (text, title, onOk) => {
    confirm({
      title,
      onOk: async () => {
        await onOk(text);
      },
      onCancel() {}
    });
  };

  const addTabs = (key, name, content) => {
    setActiveKey(key);
    if (!tabList.some(item => item.key == key)) {
      setTabList([...tabList, { key, name, content }]);
    }
  };
  const onChange = activeKey => {
    setActiveKey(activeKey);
  };
  const remove = targetKey => {
    const index = tabList.findIndex(item => item.key == targetKey) - 1;
    if (targetKey == activeKey) setActiveKey(tabList[index].key);
    setTabList(tabList.filter(item => item.key != targetKey));
  };
  const onEdit = (targetKey, action) => {
    action == 'remove' && remove(targetKey);
  };
  return (
    <BasicLayout breadcrumbList={bdList}>
      <StickyTabs
        hideAdd
        onChange={onChange}
        onEdit={onEdit}
        activeKey={activeKey}
        type="editable-card"
      >
        {tabList &&
          tabList.map((item, index) => (
            <TabPane tab={item.name} key={item.key} closable={index !== 0}>
              <item.content
                addTabs={addTabs}
                showConfirm={showConfirm}
                id={item.key}
              />
            </TabPane>
          ))}
      </StickyTabs>
    </BasicLayout>
  );
};
