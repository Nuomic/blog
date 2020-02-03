"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//定义描述文档结构
var userSchema = _mongoose["default"].Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  registrantion_time: {
    type: Date,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  }
}); //定义Model


var _default = _mongoose["default"].model('user', userSchema);

exports["default"] = _default;