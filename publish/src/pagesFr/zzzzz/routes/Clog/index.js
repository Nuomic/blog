"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _ctriputil = _interopRequireDefault(require("ctriputil"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 用 cat 记录 node server 的运行状况
 */
// 引入 express router
var router = (0, _express.Router)(); // 输出一个函数，该函数可以拿到 expres app 和 http server 两个参数

function _default(app, server) {
  app.use('/localapi', router); // 将 router 挂载到 express app 里

  server.on('error', function (error) {
    // 对 server 进行一些处理
    console.log('error', error);
  });
}
/**
 * 前端记CLog方法
 * 前端调用
 * this.postApi('/localapi/createClog',{type,title,message,addInfo},{raw:true})*/


router.post('/createClog', function (req, res) {
  var _req$body = req.body,
      type = _req$body.type,
      title = _req$body.title,
      message = _req$body.message,
      addInfo = _req$body.addInfo;

  _ctriputil["default"].clogging.custom({
    type: type,
    title: title,
    message: message,
    addInfo: addInfo
  });

  res.json({
    //服务端解析成JSON后响应
    error: req.body
  });
});