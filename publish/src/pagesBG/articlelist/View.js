"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _reactSticky = require("react-sticky");

var _antd = require("antd");

var _component = require("react-imvc/component");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var confirm = _antd.Modal.confirm;
var TabPane = _antd.Tabs.TabPane;

var _default = function _default(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  var bdList = [{
    name: '首页',
    href: '/admin'
  }, {
    name: '文章管理',
    href: '/articlemng'
  }];
  var articleList = state.articleList;
  var handleDelete = handlers.handleDelete;
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
  }]; //粘性定位元素

  var renderTabBar = function renderTabBar(props, DefaultTabBar) {
    return _react["default"].createElement(_reactSticky.Sticky, {
      topOffset: -80
    }, function (_ref2) {
      var style = _ref2.style;
      return _react["default"].createElement(DefaultTabBar, _extends({}, props, {
        style: _objectSpread({}, style, {
          background: '#fff',
          top: 68,
          zIndex: 1
        })
      }));
    });
  };

  var IconText = function IconText(_ref3) {
    var type = _ref3.type,
        text = _ref3.text;
    return _react["default"].createElement("span", {
      style: {
        padding: '0 20px 0 0'
      }
    }, _react["default"].createElement(_antd.Icon, {
      type: type,
      style: {
        marginRight: 8
      }
    }), _react["default"].createElement("span", null, text));
  }; // 文章分类处理


  var ArticleList = function ArticleList(status) {
    return articleList && articleList.filter(function (item) {
      return status == 0 ? true : item.status == status;
    });
  }; //删除提示框


  function showConfirm(id, status) {
    confirm({
      title: '确定要删除改文章吗？',
      content: status == 3 || status == 4 ? '是否彻底删除，删除后将无法找回' : '删除后可在回收站恢复',
      onOk: function onOk() {
        return regeneratorRuntime.async(function onOk$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(handleDelete(id, status));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        });
      },
      onCancel: function onCancel() {}
    });
  }

  return _react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  }, _react["default"].createElement(_reactSticky.StickyContainer, null, _react["default"].createElement(_antd.Tabs, {
    tabBarExtraContent: _react["default"].createElement(_component.Link, {
      to: "/md/add"
    }, _react["default"].createElement(_antd.Button, {
      type: "primary",
      ghost: true
    }, _react["default"].createElement(_antd.Icon, {
      type: "plus"
    }), "\u65B0\u589E")),
    defaultActiveKey: "0",
    renderTabBar: renderTabBar // style={{ position: 'relative', top: '-20px' }}

  }, articleStatus && articleStatus.map(function (item) {
    return _react["default"].createElement(TabPane, {
      tab: item.tabName + " (".concat(ArticleList(item.key).length, ")"),
      key: item.key
    }, _react["default"].createElement(_antd.List, {
      pagination: {
        onChange: function onChange(page) {
          console.log(page);
        },
        pageSize: 10
      },
      itemLayout: "horizontal",
      dataSource: ArticleList(item.key),
      renderItem: function renderItem(item) {
        return _react["default"].createElement(_antd.List.Item, {
          key: item.id,
          actions: [_react["default"].createElement(_component.Link, {
            to: "/md/edit/".concat(item.id)
          }, "\u7F16\u8F91"), _react["default"].createElement(_component.Link, {
            to: "/articledetail/".concat(item.id)
          }, "\u67E5\u770B"), _react["default"].createElement(_antd.Button, {
            type: "link",
            style: {
              color: 'red',
              padding: 0
            },
            onClick: showConfirm.bind(_this, item.id, item.status)
          }, "\u5220\u9664")]
        }, _react["default"].createElement(_antd.List.Item.Meta, {
          title: _react["default"].createElement("span", {
            style: {
              fontWeight: 600
            }
          }, item.status == 3 ? _react["default"].createElement(_antd.Tag, {
            color: "green",
            className: "article-status-tag"
          }, "\u8349\u7A3F") : item.status == 4 ? _react["default"].createElement(_antd.Tag, {
            color: "purple",
            className: "article-status-tag"
          }, "\u56DE\u6536") : '', item.title),
          description: _react["default"].createElement("div", null, _react["default"].createElement(IconText, {
            type: "clock-circle",
            text: item.date
          }), _react["default"].createElement(IconText, {
            type: "read",
            text: item.viewCount
          }), _react["default"].createElement(IconText, {
            type: "like-o",
            text: item.likeCount
          }), _react["default"].createElement(IconText, {
            type: "message",
            text: item.commentCount
          }))
        }));
      }
    }));
  }))));
};

exports["default"] = _default;