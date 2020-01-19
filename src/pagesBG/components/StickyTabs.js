import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Tabs } from 'antd';
export default ({ children, tabBarExtraContent }) => {
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
  return (
    <StickyContainer>
      <Tabs
        tabBarExtraContent={tabBarExtraContent}
        defaultActiveKey="0"
        renderTabBar={renderTabBar}
      >
        {children}
      </Tabs>
    </StickyContainer>
  );
};
