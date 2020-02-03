"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//定义描述文档结构
var tagSchema = _mongoose["default"].Schema({
  category_id: {
    type: String,
    required: true
  },
  tag_id: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  view_count: {
    type: Number
  },
  like_count: {
    type: Number
  },
  comment_count: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}); //定义Model


var _default = _mongoose["default"].model('tag', tagSchema);

exports["default"] = _default;