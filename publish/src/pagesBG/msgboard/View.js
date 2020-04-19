"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _StickyTabs = _interopRequireDefault(require("../components/StickyTabs"));

var _antd = require("antd");

var _component = require("react-imvc/component");

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/zh-cn");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Item = _antd.Form.Item;
var confirm = _antd.Modal.confirm;
var TabPane = _antd.Tabs.TabPane;

var _default = function _default(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  var _state$commentList = state.commentList,
      commentList = _state$commentList === void 0 ? [] : _state$commentList,
      userInfo = state.userInfo;
  console.log('state', state);
  console.log('userInfo+++++++++', userInfo);
  var handleDeleteComment = handlers.handleDeleteComment,
      handleSaveComment = handlers.handleSaveComment;
  var bdList = [{
    name: '首页',
    href: '/admin'
  }, {
    name: '留言管理'
  }];
  var articleStatus = [{
    tabName: '评论管理',
    key: '0'
  }, {
    tabName: '留言管理',
    key: '1'
  }, {
    tabName: '我的回复',
    key: '2'
  }];

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      comForm = _useState2[0],
      setComForm = _useState2[1];

  var commentType = function commentType(type) {
    return commentList && type === '0' ? commentList.filter(function (item) {
      return !!item.articleInfo.id && !item.isMine;
    }) : type === '1' ? commentList.filter(function (item) {
      return !item.articleInfo.id && !item.isMine;
    }) : type === '2' ? commentList.filter(function (item) {
      return item.isMine;
    }) : [];
  };

  var CommentForm = _antd.Form.create()(function (_ref2) {
    var form = _ref2.form;
    var getFieldDecorator = form.getFieldDecorator,
        validateFields = form.validateFields,
        getFieldValue = form.getFieldValue;

    var handleSubmit = function handleSubmit(e) {
      e.preventDefault();
      validateFields(function (err, values) {
        if (!err) {
          handleSaveComment(_objectSpread({}, values, {}, comForm, {}, userInfo, {
            isMine: true
          }));
        }
      });
    };

    return _react["default"].createElement(_antd.Form, {
      onSubmit: handleSubmit,
      labelCol: {
        span: 2
      },
      wrapperCol: {
        span: 15
      },
      colon: false
    }, _react["default"].createElement(Item, {
      label: _react["default"].createElement(_antd.Avatar, {
        src: userInfo.avatar
      })
    }, getFieldDecorator('content')(_react["default"].createElement(_antd.Input, {
      placeholder: "\u53D1\u8868\u4F60\u7684\u8BC4\u8BBA",
      style: {
        width: '100%',
        position: 'relative',
        top: 5
      },
      suffix: _react["default"].createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit",
        style: {
          position: 'relative',
          right: '-12px'
        },
        disabled: !getFieldValue('content')
      }, "\u53D1\u8868\u8BC4\u8BBA")
    }))));
  }); //删除提示框


  var showConfirm = function showConfirm(id) {
    confirm({
      title: '是否要删除这条评论',
      onOk: function onOk() {
        return regeneratorRuntime.async(function onOk$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(handleDeleteComment(id));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        });
      },
      onCancel: function onCancel() {}
    });
  };

  return _react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  }, _react["default"].createElement(_StickyTabs["default"], null, articleStatus && articleStatus.map(function (item) {
    return _react["default"].createElement(TabPane, {
      tab: item.tabName + " (".concat(commentType(item.key).length, ")"),
      key: item.key
    }, _react["default"].createElement(_antd.List, {
      pagination: {
        onChange: function onChange(page) {
          console.log(page);
        },
        pageSize: 10
      },
      itemLayout: "horizontal",
      dataSource: commentType(item.key),
      renderItem: function renderItem(item) {
        return _react["default"].createElement(_antd.List.Item, {
          key: item.id,
          actions: [_react["default"].createElement(_antd.Button, {
            type: "link",
            onClick: function onClick() {
              return setComForm({
                parentId: item.id,
                articleId: item.articleInfo.id
              });
            }
          }, "\u5FEB\u901F\u56DE\u590D"), _react["default"].createElement(_antd.Button, {
            type: "link",
            style: {
              color: 'red'
            },
            onClick: showConfirm.bind(_this, item.id)
          }, "\u5220\u9664")]
        }, _react["default"].createElement("div", {
          style: {
            width: '100%'
          }
        }, _react["default"].createElement(_antd.List.Item.Meta, {
          avatar: _react["default"].createElement(_antd.Avatar, {
            src: item.avatar
          }),
          title: _react["default"].createElement("span", null, _react["default"].createElement(_antd.Tooltip, {
            title: item.email,
            trigger: "click"
          }, item.nickname), '  ', _react["default"].createElement(_antd.Tooltip, {
            trigger: "click",
            title: (0, _moment["default"])(item.date).format('YYYY-MM-DD HH:mm:ss')
          }, (0, _moment["default"])(item.date).fromNow()), '  ', !!item.articleInfo.id ? _react["default"].createElement("span", null, item.isMine ? '回复的文章' : '回复了你的文章', ' ', _react["default"].createElement(_component.Link, {
            to: '/articledetail/' + item.articleInfo.id
          }, item.articleInfo.title)) : item.isMine ? '回复了留言' : '给你留言'),
          description: item.content
        }), comForm.parentId == item.id && _react["default"].createElement(CommentForm, null)));
      }
    }));
  })));
};

exports["default"] = _default;