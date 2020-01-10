"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = attachBridge;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 根据 userAgent 判断是否添加 ctrip bridge 脚本
 */
function attachBridge(req, res, next) {
  var userAgent = req.headers["user-agent"];

  var isCtripApp = /ctripwireless/i.test(userAgent) || req.query.__isCtripApp;

  if (isCtripApp) {
    res.locals.bridge = getBridge(res.locals.publicPath);
  }

  next();
}

function getBridge(publicPath) {
  return _react["default"].createElement("script", {
    type: "text/javascript",
    src: "".concat(publicPath, "/lib/bridge.js")
  });
}