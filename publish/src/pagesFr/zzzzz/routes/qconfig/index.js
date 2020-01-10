"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _configV = _interopRequireDefault(require("./config-v2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import config from './config'
function _default(app) {
  app.use('/qconfig', _configV["default"]);
}