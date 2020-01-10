"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = attachBridge;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 根据 userAgent 判断是否添加 微信 sdk 脚本
 */
function attachBridge(req, res, next) {
  var userAgent = req.headers['user-agent'];

  var isWeixin = /MicroMessenger/i.test(userAgent) || req.query.__isWeixin;

  if (isWeixin) {
    res.locals.weixinSdk = [getWeixinSdk(res.locals.publicPath), getCtripWeixin(res.locals.publicPath)];
  }

  next();
}

function getWeixinSdk(publicPath) {
  return _react["default"].createElement("script", {
    type: "text/javascript",
    src: "//res.wx.qq.com/open/js/jweixin-1.0.0.js",
    key: "WeChatSDK"
  });
}

function getCtripWeixin(publicPath) {
  return _react["default"].createElement("script", {
    type: "text/javascript",
    src: "".concat(publicPath, "/lib/weixin.js"),
    key: "WeChat"
  });
}