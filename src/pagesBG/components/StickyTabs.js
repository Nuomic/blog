import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Tabs } from 'antd';
export default props => {
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
      <Tabs {...props} renderTabBar={renderTabBar}>
        {props.children}
      </Tabs>
    </StickyContainer>
  );
};
