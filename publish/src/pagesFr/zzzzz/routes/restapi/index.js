"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _soa = _interopRequireDefault(require("./soa"));

var _gateway = _interopRequireDefault(require("./gateway"));

var _getip = _interopRequireDefault(require("./getip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(app) {
  app.use('/restapi/soa', _soa["default"], _gateway["default"]);
  app.use('/restapi/gateway', _gateway["default"]);
  app.use('/restapi/getIP', _getip["default"]);
}