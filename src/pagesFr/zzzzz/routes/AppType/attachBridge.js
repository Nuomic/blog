/**
 * 根据 userAgent 判断是否添加 ctrip bridge 脚本
 */
import React from "react";

export default function attachBridge(req, res, next) {
  let userAgent = req.headers["user-agent"];
  let isCtripApp = /ctripwireless/i.test(userAgent) || req.query.__isCtripApp;
  if (isCtripApp) {
    res.locals.bridge = getBridge(res.locals.publicPath);
  }
  next();
}

function getBridge(publicPath) {
  return <script type="text/javascript" src={`${publicPath}/lib/bridge.js`} />;
}
