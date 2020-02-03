"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingModel = exports.TagModel = exports.CommentModel = exports.FriendModel = exports.CategoryModel = exports.ArticleModel = exports.UserModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userModel = _interopRequireDefault(require("./userModel"));

var _articleModel = _interopRequireDefault(require("./articleModel"));

var _categoryModel = _interopRequireDefault(require("./categoryModel"));

var _friendModel = _interopRequireDefault(require("./friendModel"));

var _commentModel = _interopRequireDefault(require("./commentModel"));

var _tagModel = _interopRequireDefault(require("./tagModel"));

var _settingModel = _interopRequireDefault(require("./settingModel"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 1.1 连接数据库
_mongoose["default"].connect(_config.dbUrl); //1.2 获取连接对象


var conn = _mongoose["default"].connection; // 1.3 绑定连接完成的监听

conn.on('connected', function () {
  console.log('数据库连接成功！');
});
var UserModel = _userModel["default"];
exports.UserModel = UserModel;
var ArticleModel = _articleModel["default"];
exports.ArticleModel = ArticleModel;
var CategoryModel = _categoryModel["default"];
exports.CategoryModel = CategoryModel;
var FriendModel = _friendModel["default"];
exports.FriendModel = FriendModel;
var CommentModel = _commentModel["default"];
exports.CommentModel = CommentModel;
var TagModel = _tagModel["default"];
exports.TagModel = TagModel;
var SettingModel = _settingModel["default"];
exports.SettingModel = SettingModel;