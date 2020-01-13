"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _component = require("react-imvc/component");

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var withData = (0, _connect["default"])(function (_ref) {
  var state = _ref.state;
  return {
    siderDate: state.siderDate
  };
});

var Sider = function Sider(_ref2) {
  var siderDate = _ref2.siderDate;

  var handleToDetail = function handleToDetail(id) {
    return "/articledetail/".concat(id);
  };

  var SiderItem = function SiderItem(_ref3) {
    var name = _ref3.name,
        dataSource = _ref3.dataSource,
        grid = _ref3.grid,
        Item = _ref3.Item;
    return _react["default"].createElement(_antd.Card, {
      title: _react["default"].createElement("span", {
        className: "font-bold"
      }, name),
      size: "small",
      bordered: false
    }, _react["default"].createElement(_antd.List, {
      split: false,
      grid: grid,
      size: "small",
      dataSource: dataSource,
      renderItem: function renderItem(item) {
        return _react["default"].createElement(_antd.List.Item, {
          key: item.id,
          className: !grid ? 'article-list-item' : ''
        }, Item(item));
      }
    }));
  };

  return _react["default"].createElement("div", {
    className: "basic-sider"
  }, _react["default"].createElement(SiderItem, {
    name: "\u70ED\u95E8\u6587\u7AE0",
    dataSource: siderDate.hotList,
    Item: function Item(item) {
      return _react["default"].createElement("div", {
        className: "article-list-title"
      }, _react["default"].createElement(_antd.Tag, {
        className: "hot-title-index"
      }, siderDate.hotList && siderDate.hotList.findIndex(function (i) {
        return item.id == i.id;
      }) + 1), _react["default"].createElement(_component.Link, {
        to: handleToDetail(item.id),
        className: "link-color"
      }, item.title));
    }
  }), _react["default"].createElement(_antd.Card, {
    title: _react["default"].createElement("span", {
      className: "font-bold"
    }, "\u6807\u7B7E\u4E91\u96C6"),
    size: "small",
    bordered: false
  }, siderDate.tagList && siderDate.tagList.map(function (item) {
    return _react["default"].createElement(_antd.Tag, {
      color: item.color,
      key: item.id,
      style: {
        cursor: 'pointer'
      }
    }, item.name);
  })), _react["default"].createElement(SiderItem, {
    name: "\u6700\u65B0\u6587\u7AE0",
    dataSource: siderDate.latestList,
    Item: function Item(item) {
      return _react["default"].createElement("div", {
        className: "article-list-title"
      }, _react["default"].createElement("span", {
        className: "latest-article-date"
      }, "[ ", item.date, " ]"), _react["default"].createElement(_component.Link, {
        to: handleToDetail(item.id),
        className: "link-color "
      }, item.title));
    }
  }), _react["default"].createElement(SiderItem, {
    name: "\u5206\u7C7B\u4E13\u680F",
    dataSource: siderDate.categoryList,
    Item: function Item(item) {
      return _react["default"].createElement("div", {
        style: {
          width: '100%'
        }
      }, _react["default"].createElement(_component.Link, {
        to: handleToDetail(item.id),
        className: "link-color"
      }, item.name), _react["default"].createElement("span", {
        style: {
          "float": 'right'
        }
      }, item.articleCount, " ", _react["default"].createElement("i", null, "\u7BC7")));
    }
  }), _react["default"].createElement(SiderItem, {
    name: "\u53CB\u60C5\u94FE\u63A5",
    grid: {
      column: 2
    },
    dataSource: siderDate.links,
    Item: function Item(item) {
      return _react["default"].createElement("a", {
        href: item.url,
        className: "link-color"
      }, item.name);
    }
  }));
};

var _default = withData(Sider);

exports["default"] = _default;