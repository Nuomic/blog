"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

var _antd = require("antd");

var _moment = _interopRequireDefault(require("moment"));

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

var TextArea = _antd.Input.TextArea;
var withData = (0, _connect["default"])(function (_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  return {
    commentList: state.commentList,
    total: state.total,
    getcommentList: handlers.handleGetCommentList
  };
});

var _default = withData(function (_ref2) {
  var commentList = _ref2.commentList,
      getcommentList = _ref2.getcommentList,
      total = _ref2.total;
  console.log('commentList', commentList);
  console.log('total', total);

  var _useState = (0, _react.useState)({
    data: commentList,
    loading: false,
    hasMore: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      commentData = _useState2[0],
      setCommentData = _useState2[1];

  var like = function like() {
    setCommentData({
      likes: 1,
      dislikes: 0,
      action: 'liked'
    });
  };

  var dislike = function dislike() {
    setCommentData({
      likes: 0,
      dislikes: 1,
      action: 'disliked'
    });
  };

  var actions = function actions() {
    return [_react["default"].createElement("span", {
      key: "comment-basic-like"
    }, _react["default"].createElement(_antd.Tooltip, {
      title: "\u8D5E"
    }, _react["default"].createElement(_antd.Icon, {
      type: "like",
      theme: 'action' === 'liked' ? 'filled' : 'outlined',
      onClick: like
    })), _react["default"].createElement("span", {
      style: {
        paddingLeft: 8,
        cursor: 'auto'
      }
    }, commentList.likeCount)), _react["default"].createElement("span", {
      key: " key=\"comment-basic-dislike\""
    }, _react["default"].createElement(_antd.Tooltip, {
      title: "\u8E29"
    }, _react["default"].createElement(_antd.Icon, {
      type: "dislike",
      theme: 'action' === 'disliked' ? 'filled' : 'outlined',
      onClick: dislike
    })), _react["default"].createElement("span", {
      style: {
        paddingLeft: 8,
        cursor: 'auto'
      }
    }, commentList.dislikeCount)), _react["default"].createElement("span", {
      key: "comment-basic-reply-to"
    }, "Reply to")];
  }; //评论表单


  var CommentForm = function CommentForm(item) {
    return _react["default"].createElement(_antd.Form, null, _react["default"].createElement(_antd.Form.Item, null, _react["default"].createElement(TextArea, {
      rows: 5,
      style: {
        opacity: 0.8
      }
    })), _react["default"].createElement(_antd.Form.Item, null, _react["default"].createElement(_antd.Button, {
      type: "primary",
      style: {
        opacity: 0.8
      }
    }, "\u63D0\u4EA4")));
  };

  var Comments = function Comments(_ref3) {
    var item = _ref3.item,
        children = _ref3.children;
    return _react["default"].createElement(_antd.Comment, {
      actions: actions(),
      author: _react["default"].createElement("a", null, item.nickname),
      avatar: _react["default"].createElement(_antd.Avatar, {
        src: item.avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        alt: "Han Solo"
      }),
      content: _react["default"].createElement("p", null, item.content),
      datetime: _react["default"].createElement(_antd.Tooltip, {
        title: (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss')
      }, _react["default"].createElement("span", null, (0, _moment["default"])().fromNow()))
    }, children);
  };

  var handleInfiniteOnLoad = function handleInfiniteOnLoad() {
    return regeneratorRuntime.async(function handleInfiniteOnLoad$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setCommentData({
              loading: true
            });

            if (!(commentData.data.length > total)) {
              _context.next = 5;
              break;
            }

            _antd.message.warning('Infinite List loaded all');

            _this.setState({
              hasMore: false,
              loading: false
            });

            return _context.abrupt("return");

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(getcommentList());

          case 7:
            setCommentData({
              data: _objectSpread({}, commentData.data, {
                commentList: commentList
              })
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  return _react["default"].createElement(_antd.Card, null, _react["default"].createElement(CommentForm, null), _react["default"].createElement(_antd.Divider, {
    orientation: "left"
  }, "\u8BC4\u8BBA"), _react["default"].createElement(_antd.Divider, {
    orientation: "right"
  }, total), _react["default"].createElement(_reactInfiniteScroller["default"] // initialLoad={false}
  , {
    pageStart: 0,
    loadMore: handleInfiniteOnLoad,
    hasMore: commentData.loading && commentData.hasMore,
    loader: _react["default"].createElement(_antd.Spin, null)
  }, _react["default"].createElement(_antd.List, {
    dataSource: commentData.data,
    renderItem: function renderItem(item) {
      return _react["default"].createElement(_antd.List.Item, {
        key: item.id
      }, _react["default"].createElement(Comments, {
        item: item
      }, item.subList.length > 0 && item.subList && item.subList.map(function (item) {
        return _react["default"].createElement(Comments, {
          item: item,
          key: item.id
        });
      })));
    }
  })));
});

exports["default"] = _default;