"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var state = _ref.state,
      ctrl = _ref.ctrl;
  var _state$portfolioList = state.portfolioList,
      portfolioList = _state$portfolioList === void 0 ? [] : _state$portfolioList;
  console.log('state', state);
  console.log('ctrl', ctrl);
  var BreadcrumbList = [{
    name: '首页',
    href: '/home'
  }, {
    name: '作品集'
  }];

  var toPreView = function toPreView(url) {
    window.open('http://' + url, 'blank');
  };

  return /*#__PURE__*/_react["default"].createElement(_BasicLayout["default"], {
    BreadcrumbList: BreadcrumbList
  }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    gutter: 12
  }, portfolioList.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_antd.Col, {
      key: item.id,
      span: 8
    }, /*#__PURE__*/_react["default"].createElement(_antd.Card, {
      className: "portfolio-card",
      size: "small",
      cover: /*#__PURE__*/_react["default"].createElement("div", {
        className: "out-rectangle ",
        onClick: function onClick() {
          return toPreView(item.preUrl);
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "inner-rectangle",
        alt: "example",
        src: item.pictureUrl
      }))
    }, /*#__PURE__*/_react["default"].createElement(_antd.Card.Meta, {
      title: /*#__PURE__*/_react["default"].createElement("div", {
        className: "article-list-title",
        style: {
          position: 'relative',
          padding: '0 20px 0 0 '
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, item.name), /*#__PURE__*/_react["default"].createElement("a", {
        href: item.resoureUrl,
        title: "\u4E0B\u8F7D"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
        type: "download",
        style: {
          position: 'absolute',
          right: 0,
          bottom: 3
        }
      }))),
      description: /*#__PURE__*/_react["default"].createElement("div", {
        title: item.description,
        className: "portfolio-description"
      }, item.description)
    })));
  })));
};

exports["default"] = _default;