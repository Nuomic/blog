import React from 'react';
import { themeColor, footerDate } from '../config';
import { Icon, Tooltip } from 'antd';
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
          {footerDate.connectWay &&
            footerDate.connectWay.map(item =>
              item.href ? (
                <a href={item.href} target="blank" key={item.type}>
                  <Icon type={item.type} className="connect-icon" />
                </a>
              ) : item.qrCode ? (
                <Tooltip
                  arrowPointAtCenter
                  key={item.type}
                  title={
                    <div style={{ width: 200, height: 220 }}>
                      <img width="200px" alt={item.alt} src={item.qrCode} />
                      <div className="align-center">{item.alt}</div>
                    </div>
                  }
                >
                  <Icon type={item.type} className="connect-icon" />
                </Tooltip>
              ) : null
            )}
        </div>
      </div>
      <div className="copyright-section">
        <span>
          &copy; {footerDate.startYear} - {new Date().getFullYear()}
          {'  '}
          {footerDate.siteName}
        </span>
        <span style={{ margin: '0 5px' }}>|</span>
        <a href="http://www.beian.miit.gov.cn" target="blank">
          {footerDate.record}
        </a>
      </div>
    </div>
  );
};
