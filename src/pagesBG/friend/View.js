import React, { useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import StickyTabs from '../components/StickyTabs';
import { Tabs, Modal, Button } from 'antd';
import FriendForm from './component/FriendForm';
import FriendList from './component/FriendList';
const { confirm } = Modal;
const { TabPane } = Tabs;
export default ({ state }) => {
  const { friendList } = state;
  const bdList = [{ name: '首页', href: '/admin' }, { name: '有情链接' }];
  const friendStatus = [
    { tabName: '已审核', key: '0' },
    { tabName: '待审核', key: '1' }
  ];
  const [modalStatus, setModalStatus] = useState(false);
  const [currentValue, setCurrentValue] = useState({});
  const dataSource = status =>
    !!friendList && friendList.filter(item => item.status == status);
  const changModalStatus = value => {
    setCurrentValue(value);
    setModalStatus(!modalStatus);
  };
  return (
    <BasicLayout breadcrumbList={bdList}>
      <StickyTabs
        tabBarExtraContent={
          <Button
            type="primary"
            ghost
            icon="plus"
            onClick={() => changModalStatus({})}
          >
            新增
          </Button>
        }
      >
        {friendStatus &&
          friendStatus.map(item => (
            <TabPane
              tab={item.tabName + ` (${dataSource(item.key).length})`}
              key={item.key}
            >
              <FriendList
                dataSource={dataSource(item.key)}
                changModalStatus={changModalStatus}
              />
            </TabPane>
          ))}
      </StickyTabs>
      <FriendForm
        currentValue={currentValue}
        modalStatus={modalStatus}
        changModalStatus={changModalStatus}
      />
    </BasicLayout>
  );
};
