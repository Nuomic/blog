import React from 'react';
import { themeColor } from '../config';
import { Icon } from 'antd';
import { Link } from 'react-imvc/component';
export default () => {
  return (
    <div
      className="basic-footer"
      style={{ backgroundColor: themeColor.footerBgColor }}
    >
      <div>
        <div className="brand">
          <h4>Delas</h4>
        </div>
        <div className="social-section">
          <h4>CONNECT</h4>
          <Link to="#">
            <Icon type="github" className="connect-icon" />
          </Link>
          <Link to="#">
            <Icon type="qq" className="connect-icon" />
          </Link>
          <Link to="#">
            <Icon type="wechat" className="connect-icon" />
          </Link>
          <Link to="#">
            <Icon type="weibo" className="connect-icon" />
          </Link>
        </div>
      </div>
      <div className="copyright-section">2019ssssssssssssssssssssssssssss</div>
    </div>
  );
};
