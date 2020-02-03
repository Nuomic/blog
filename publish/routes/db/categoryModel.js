"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//定义描述文档结构
var categorySchema = _mongoose["default"].Schema({
  id: _mongoose["default"].Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  summary: String,
  avatar: String,
  articleCount: Number
}, {
  timestamps: true
}); //定义Model


var _default = _mongoose["default"].model('category', categorySchema);

exports["default"] = _default;