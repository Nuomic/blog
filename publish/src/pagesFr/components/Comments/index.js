"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

var _ComForm = _interopRequireDefault(require("./ComForm"));

var _ComItem = _interopRequireDefault(require("./ComItem"));

var _antd = require("antd");

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

  var _useState = (0, _react.useState)(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      comFormId = _useState2[0],
      setComFormId = _useState2[1];

  console.log('comFormId', comFormId);
  console.log('commentList', commentList);
  console.log('total', total);

  var _useState3 = (0, _react.useState)({
    data: commentList,
    loading: false,
    hasMore: true
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      commentData = _useState4[0],
      setCommentData = _useState4[1];

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

  return _react["default"].createElement(_antd.Card, null, !comFormId && _react["default"].createElement(_ComForm["default"], null), _react["default"].createElement(_antd.Divider, {
    orientation: "right"
  }, "\u603B\u8BC4\u8BBA\uFF1A", total), _react["default"].createElement(_reactInfiniteScroller["default"], {
    pageStart: 0,
    loadMore: handleInfiniteOnLoad,
    hasMore: commentData.loading && commentData.hasMore,
    loader: _react["default"].createElement(_antd.Spin, null)
  }, _react["default"].createElement(_antd.List, {
    dataSource: commentData.data,
    renderItem: function renderItem(item) {
      return _react["default"].createElement(_antd.List.Item, {
        key: item.id
      }, _react["default"].createElement(_ComItem["default"], {
        item: item,
        comFormId: comFormId,
        setComFormId: setComFormId
      }));
    }
  }, commentData.loading && commentData.hasMore && _react["default"].createElement("div", {
    className: "demo-loading-container"
  }, _react["default"].createElement(_antd.Spin, null)))));
});

exports["default"] = _default;