"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _antd = require("antd");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _Comments = _interopRequireDefault(require("../components/Comments"));

var _component = require("react-imvc/component");

var _CodeBlock = _interopRequireDefault(require("./component/CodeBlock"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Title = _antd.Typography.Title,
    Paragraph = _antd.Typography.Paragraph;

var _default = function _default(props) {
  console.log('props', props);
  var _props$state$articleD = props.state.articleDetail,
      articleDetail = _props$state$articleD === void 0 ? {} : _props$state$articleD;
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

  var IconText = function IconText(_ref) {
    var type = _ref.type,
        text = _ref.text,
        _ref$style = _ref.style,
        style = _ref$style === void 0 ? {} : _ref$style,
        onClick = _ref.onClick;
    return /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        padding: '0 20px 0 0',
        fontSize: 13
      },
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
      type: type,
      style: _objectSpread({
        marginRight: 8
      }, style)
    }), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        color: '#eee'
      }
    }, text));
  };

  return /*#__PURE__*/_react["default"].createElement(_BasicLayout["default"], {
    BreadcrumbList: BreadcrumbList
  }, /*#__PURE__*/_react["default"].createElement(_antd.Card, {
    title: /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement(Title, {
      level: 4,
      ellipsis: true
    }, articleDetail.title), /*#__PURE__*/_react["default"].createElement(IconText, {
      type: "unordered-list",
      text: categoryInfo.name
    }), /*#__PURE__*/_react["default"].createElement(IconText, {
      type: "eye",
      text: articleDetail.viewCount
    }), /*#__PURE__*/_react["default"].createElement(IconText, {
      type: "like",
      text: articleDetail.likeCount
    }), /*#__PURE__*/_react["default"].createElement(IconText, {
      type: "calendar",
      text: (0, _moment["default"])(articleDetail.createdAt).format('YYYY-MM-DD HH:mm:ss')
    }), /*#__PURE__*/_react["default"].createElement("div", null, tagList.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_antd.Tag, {
        key: item.id,
        color: item.color
      }, item.name);
    })))
  }, /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "markdown"
  }), /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
    className: "for-markdown-preview",
    source: articleDetail.content,
    escapeHtml: false,
    renderers: {
      code: _CodeBlock["default"]
    }
  })), /*#__PURE__*/_react["default"].createElement(_antd.Card, {
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "\u4E0A\u4E00\u7BC7:", pre && /*#__PURE__*/_react["default"].createElement(_component.Link, {
    to: "/articledetail/".concat(pre.id)
  }, pre.title) || '没有了'), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      "float": 'right'
    }
  }, "\u4E0B\u4E00\u7BC7:", next && /*#__PURE__*/_react["default"].createElement(_component.Link, {
    to: "/articledetail/".concat(next.id)
  }, next.title) || '没有了')), /*#__PURE__*/_react["default"].createElement(_Comments["default"], null));
};

exports["default"] = _default;