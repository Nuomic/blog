"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverFr = void 0;

var _config = require("../config");

var _article = _interopRequireDefault(require("./article"));

var _setting = _interopRequireDefault(require("./setting"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//后端路由扁平化
var serverFr = function serverFr(app, server) {
  app.use("".concat(_config.restapi, "/fr/article"), _article["default"]);
  app.use("".concat(_config.restapi, "/fr/comment"), function () {});
  app.use("".concat(_config.restapi, "/fr/about"), function () {});
  app.use("".concat(_config.restapi, "/fr/setting"), _setting["default"]);
  server.on('error', function (error) {
    // 对 server 进行一些处理
    console.log('error', error);
  });
};

exports.serverFr = serverFr;