"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _size = _interopRequireDefault(require("./size"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(app) {
  app.use((0, _size["default"])({
    maxSize: 5 * 1024
  }));
}