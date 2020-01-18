import React, { useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import { StickyContainer, Sticky } from 'react-sticky';
import { Table, Tabs, List, Icon, Button, Tag, Modal, Divider } from 'antd';
import CategoryList from './component/CategoryList';
import { Link } from 'react-imvc/component';
const { confirm } = Modal;
const { TabPane } = Tabs;
export default ({ state, handlers }) => {
  const bdList = [
    { name: '首页', href: '/admin' },
    { name: '文章管理', href: '/articlemng' }
  ];
  const [activeKey, setActiveKey] = useState('0');
  const [tabList, setTabList] = useState([
    { key: '0', name: '栏目', content: CategoryList }
  ]);
  //粘性定位元素
  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky topOffset={-80}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          style={{ ...style, background: '#fff', top: 68, zIndex: 1 }}
        />
      )}
    </Sticky>
  );
  //删除提示框
  const showConfirm = (id, fun) => {
    confirm({
      title: '确定要删除改文章吗？',
      onOk: async () => {
        await handleDelete(id);
      },
      onCancel() {}
    });
  };

  const add = (key, name, content) => {
    setActiveKey(key);
    if (!tabList.some(item => item.key == key))
      setTabList([...tabList, { key, name, content }]);
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
      <StickyContainer>
        <Tabs
          hideAdd
          onChange={onChange}
          type="editable-card"
          renderTabBar={renderTabBar}
          onEdit={onEdit}
          activeKey={activeKey}
        >
          {tabList &&
            tabList.map((item, index) => (
              <TabPane tab={item.name} key={item.key} closable={index !== 0}>
                <item.content add={add} showConfirm={showConfirm} />
              </TabPane>
            ))}
        </Tabs>
      </StickyContainer>
    </BasicLayout>
  );
};
