"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//定义描述文档结构
var settingSchema = _mongoose["default"].Schema({
  about: {
    userDesc: {
      type: String,
      required: true
    },
    blogDesc: {
      type: String,
      required: true
    },
    weChat: {
      type: String,
      required: true
    },
    alipay: {
      type: String,
      required: true
    }
  }
}); //定义Model


var _default = _mongoose["default"].model('setting', settingSchema);

exports["default"] = _default;