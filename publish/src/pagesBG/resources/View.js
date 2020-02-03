"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _StickyTabs = _interopRequireDefault(require("../components/StickyTabs"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var confirm = _antd.Modal.confirm;
var TabPane = _antd.Tabs.TabPane;

var _default = function _default() {
  var bdList = [{
    name: '首页',
    href: '/admin'
  }, {
    name: '资源管理'
  }];
  var articleStatus = [{
    tabName: '全部',
    key: '0'
  }, {
    tabName: '公开',
    key: '1'
  }, {
    tabName: '私密',
    key: '2'
  }, {
    tabName: '草稿箱',
    key: '3'
  }, {
    tabName: '回收站',
    key: '4'
  }];
  return _react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  }, _react["default"].createElement(_StickyTabs["default"], null, articleStatus && articleStatus.map(function (item) {
    return _react["default"].createElement(TabPane, {
      tab: item.tabName
      /* + ` (${ArticleList(item.key).length})` */
      ,
      key: item.key
    }, "item.tabName");
  })));
};

exports["default"] = _default;