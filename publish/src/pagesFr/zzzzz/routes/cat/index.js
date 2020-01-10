"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _ctriputil = _interopRequireDefault(require("ctriputil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 用 cat 记录 node server 的运行状况
 */
function _default(app, server) {
  _ctriputil["default"].cat.http(server);
}