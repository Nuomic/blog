"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverBg = void 0;

var _category = _interopRequireDefault(require("./category"));

var _login = _interopRequireDefault(require("./login"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//后端路由扁平化
var serverBg = function serverBg(app, server) {
  app.use("".concat(_config.restapi, "/bg/login"), _login["default"]);
  app.use("".concat(_config.restapi, "/bg/category"), _category["default"]);
  server.on('error', function (error) {
    // 对 server 进行一些处理
    console.log('error', 11111111111111);
  });
};

exports.serverBg = serverBg;