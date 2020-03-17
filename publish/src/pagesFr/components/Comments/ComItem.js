"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ComItem;

var _react = _interopRequireWildcard(require("react"));

var _ComForm = _interopRequireDefault(require("./ComForm"));

var _antd = require("antd");

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/zh-cn");

var _component = require("react-imvc/component");

var _hook = require("react-imvc/hook");

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

function ComItem(_ref) {
  var _this = this;

  var item = _ref.item,
      comFormId = _ref.comFormId,
      setComFormId = _ref.setComFormId;

  var _useCtrl = (0, _hook.useCtrl)(),
      handleCommentLikeCount = _useCtrl.handleCommentLikeCount;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      openState = _useState2[0],
      setOpenState = _useState2[1];

  (0, _react.useEffect)(function () {
    setLikeCount(item.likeCount);
    var commentLikeStatus = JSON.parse(window.localStorage.getItem('commentLikeStatus')) || {};
    setIsLike(commentLikeStatus[item.id]);
  }, [item.id]);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLike = _useState4[0],
      setIsLike = _useState4[1];

  var _useState5 = (0, _react.useState)(item.likeCount),
      _useState6 = _slicedToArray(_useState5, 2),
      likeCount = _useState6[0],
      setLikeCount = _useState6[1]; // console.log('likeCount', likeCount);


  var like = function like() {
    var id = item.id;
    var currentCount = likeCount;
    var commentLikeStatus = JSON.parse(window.localStorage.getItem('commentLikeStatus')) || {};

    if (isLike) {// delete commentLikeStatus[id];
      // currentCount --;
    } else {
      currentCount++;
      commentLikeStatus[id] = true;

      var callback = function callback() {
        setIsLike(commentLikeStatus[id]);
        setLikeCount(currentCount);
        var finalValue = JSON.stringify(commentLikeStatus);
        window.localStorage.setItem('commentLikeStatus', finalValue);
      };

      handleCommentLikeCount({
        commentId: id,
        likeCount: currentCount
      }, callback);
    }
  };

  var handleChangeComFormStatus = function handleChangeComFormStatus(id) {
    setComFormId(id);
  };

  var childrenCount = function childrenCount(item) {
    var length = item.children.length;

    var count = function count(children) {
      children.forEach(function (item) {
        if (item.children) {
          length += item.children.length;
          count(item.children);
        }
      });
    };

    count(item.children);
    return length;
  };

  var actions = function actions(item) {
    return [_react["default"].createElement("span", {
      key: "comment-basic-like"
    }, _react["default"].createElement(_antd.Tooltip, {
      title: (isLike ? '已' : '') + '赞'
    }, _react["default"].createElement(_antd.Icon, {
      type: "like",
      theme: isLike ? 'filled' : 'outlined',
      style: {
        color: isLike ? 'red' : ''
      },
      onClick: like
    })), _react["default"].createElement("span", {
      style: {
        paddingLeft: 8,
        cursor: 'auto'
      }
    }, likeCount)), _react["default"].createElement("span", {
      key: "comment-basic-reply-to",
      onClick: handleChangeComFormStatus.bind(_this, item.id)
    }, "\u56DE\u590D"), item.children && item.children.length > 0 && _react["default"].createElement(_antd.Button, {
      size: "small",
      style: {
        fontSize: 12
      },
      type: "link",
      onClick: function onClick() {
        setOpenState(_objectSpread({}, openState, _defineProperty({}, item.id, !openState[item.id])));
      }
    }, openState[item.id] ? '收起回复' : "\u5168\u90E8\u56DE\u590D(".concat(childrenCount(item), ")"))];
  };

  var Comments = function Comments(_ref2) {
    var item = _ref2.item;
    return _react["default"].createElement(_antd.Comment, {
      actions: actions(item),
      author: _react["default"].createElement("a", null, item.nickname),
      avatar: _react["default"].createElement(_antd.Avatar, {
        src: item.avatar,
        alt: "Han Solo"
      }),
      content: _react["default"].createElement("p", null, item.content),
      datetime: _react["default"].createElement(_antd.Tooltip, {
        title: (0, _moment["default"])(item.date).format('YYYY-MM-DD HH:mm:ss')
      }, _react["default"].createElement("span", {
        style: {
          color: '#555'
        }
      }, (0, _moment["default"])(item.date).fromNow()))
    }, item.id == comFormId && _react["default"].createElement(_component.OuterClickWrapper, {
      onClick: function onClick() {
        return setComFormId(undefined);
      }
    }, _react["default"].createElement(_ComForm["default"], {
      parentId: item.id,
      articleId: item.articleId
    })), item.children && item.children.length > 0 && openState[item.id] && item.children.map(function (item) {
      return _react["default"].createElement(Comments, {
        item: item,
        key: item.id
      });
    }));
  };

  return _react["default"].createElement(Comments, {
    item: item
  });
}