"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _antd = require("antd");

var _Comments = _interopRequireDefault(require("../components/Comments"));

var _component = require("react-imvc/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Title = _antd.Typography.Title,
    Paragraph = _antd.Typography.Paragraph;

var _default = function _default(props) {
  console.log('props', props);
  var articleDetail = props.state.articleDetail;
  var categoryInfo = articleDetail.categoryInfo,
      next = articleDetail.next,
      pre = articleDetail.pre,
      tagList = articleDetail.tagList;
  var BreadcrumbList = [{
    name: '首页',
    href: '/home'
  }, {
    name: '博文',
    href: '/home'
  }, {
    name: articleDetail.title
  }];
  return _react["default"].createElement(_BasicLayout["default"], {
    BreadcrumbList: BreadcrumbList
  }, _react["default"].createElement(_antd.Card, {
    title: _react["default"].createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, _react["default"].createElement(Title, {
      level: 4,
      ellipsis: true
    }, articleDetail.title), _react["default"].createElement("span", null, categoryInfo.name), _react["default"].createElement("span", null, articleDetail.date), _react["default"].createElement("span", null, categoryInfo.name), _react["default"].createElement("span", null, categoryInfo.name), _react["default"].createElement("div", null, tagList.map(function (item) {
      return _react["default"].createElement(_antd.Tag, {
        key: item.id,
        color: item.color
      }, item.name);
    })))
  }, _react["default"].createElement(Paragraph, null, articleDetail.content)), _react["default"].createElement(_antd.Card, {
    size: "small"
  }, _react["default"].createElement("span", null, "\u4E0A\u4E00\u7BC7:", pre && _react["default"].createElement(_component.Link, {
    to: "/articledetail/".concat(pre.id)
  }, pre.title) || '没有了'), _react["default"].createElement("span", {
    style: {
      "float": 'right'
    }
  }, "\u4E0B\u4E00\u7BC7:", next && _react["default"].createElement(_component.Link, {
    to: "/articledetail/".concat(next.id)
  }, next.title) || '没有了')), _react["default"].createElement(_Comments["default"], null));
};

exports["default"] = _default;