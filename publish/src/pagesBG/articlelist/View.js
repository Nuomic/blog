"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _reactSticky = require("react-sticky");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TabPane = _antd.Tabs.TabPane;

var _default = function _default(_ref) {
  var state = _ref.state;
  var bdList = [{
    name: '首页',
    href: '/admin'
  }, {
    name: '文章管理',
    href: '/articlemng'
  }];
  var articleList = state.articleList;
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

  var renderTabBar = function renderTabBar(props, DefaultTabBar) {
    return _react["default"].createElement(_reactSticky.Sticky, {
      topOffset: -90
    }, function (_ref2) {
      var style = _ref2.style;
      return _react["default"].createElement(DefaultTabBar, _extends({}, props, {
        style: _objectSpread({}, style, {
          background: '#fff',
          top: 65
        })
      }));
    });
  };

  var ArticleList = function ArticleList(_ref3) {
    var status = _ref3.status;
    var list = articleList && articleList.filter(function (item) {
      return status == 0 ? item : item.status == status;
    });
    console.log('list', list);
    return list;
    /*  console.log('list', list);
    return list && list.map(item => <div key={item.id}>{item.title}</div>); */
  };

  return _react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  }, _react["default"].createElement(_reactSticky.StickyContainer, null, _react["default"].createElement(_antd.Tabs, {
    defaultActiveKey: "0",
    renderTabBar: renderTabBar,
    style: {
      position: 'relative',
      top: '-20px'
    }
  }, articleStatus && articleStatus.map(function (item) {
    return _react["default"].createElement(TabPane, {
      tab: item.tabName + "(".concat(ArticleList(item.key).length, ")"),
      key: item.key
    }, ArticleList(item.key).map(function (item) {
      return _react["default"].createElement("div", {
        key: item.id
      }, item.title);
    }));
  }))));
};

exports["default"] = _default;