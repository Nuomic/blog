"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _attachUbt = _interopRequireDefault(require("./attachUbt"));

var _attachBridge = _interopRequireDefault(require("./attachBridge"));

var _attachWeixinSdk = _interopRequireDefault(require("./attachWeixinSdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(app) {
  app.use(_attachUbt["default"], _attachBridge["default"], _attachWeixinSdk["default"]);
}