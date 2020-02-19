"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _component = require("react-imvc/component");

var _hook = require("react-imvc/hook");

var _moment = _interopRequireDefault(require("moment"));

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

var Paragraph = _antd.Typography.Paragraph;

var _default = function _default() {
  var _useCtrl = (0, _hook.useCtrl)(),
      handleChangeLikeCount = _useCtrl.handleChangeLikeCount;

  var _useModelState = (0, _hook.useModelState)(),
      articleList = _useModelState.articleList;

  (0, _react.useEffect)(function () {
    setLoading(false);
    var articleLikeStatus = JSON.parse(window.localStorage.getItem('articleLikeStatus')) || {};
    setLikeStatus(articleLikeStatus);
  }, []);

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      likeStatus = _useState4[0],
      setLikeStatus = _useState4[1];

  var initLikeCount = {};
  articleList && articleList.forEach(function (item) {
    initLikeCount[item.id] = item.likeCount;
  });

  var _useState5 = (0, _react.useState)(initLikeCount),
      _useState6 = _slicedToArray(_useState5, 2),
      likeCount = _useState6[0],
      setLikeCount = _useState6[1];

  console.log('likeCount', likeCount);

  var handleToDetail = function handleToDetail(id) {
    return "/articledetail/".concat(id);
  };

  var changeLikeCount = function changeLikeCount(id) {
    var current = _defineProperty({}, id, likeCount[id]);

    var articleLikeStatus = JSON.parse(window.localStorage.getItem('articleLikeStatus')) || {};

    if (articleLikeStatus[id]) {// delete articleLikeStatus[id];
      // setLikeStatus(articleLikeStatus);
      // current[id]--;
    } else {
      articleLikeStatus[id] = true;
      setLikeStatus(articleLikeStatus);
      current[id]++;

      var callback = function callback() {
        setLikeCount(_objectSpread({}, likeCount, {}, current));
        var finalValue = JSON.stringify(articleLikeStatus);
        window.localStorage.setItem('articleLikeStatus', finalValue);
      };

      handleChangeLikeCount({
        id: id,
        likeCount: current[id]
      }, callback);
    } // const callback = () => {
    //   setLikeCount({ ...likeCount, ...current });
    //   let finalValue = JSON.stringify(articleLikeStatus);
    //   window.localStorage.setItem('articleLikeStatus', finalValue);
    // };
    // handleChangeLikeCount({ id, likeCount: current[id] }, callback);

  };

  var IconText = function IconText(_ref) {
    var type = _ref.type,
        text = _ref.text,
        style = _ref.style,
        onClick = _ref.onClick;
    if (!style) style = {};
    return _react["default"].createElement("span", {
      style: {
        padding: '0 20px 0 0'
      },
      onClick: onClick
    }, _react["default"].createElement(_antd.Icon, {
      type: type,
      style: _objectSpread({
        marginRight: 8
      }, style)
    }), _react["default"].createElement("span", {
      style: {
        color: !(type == 'clock-circle') && '#3399ea'
      }
    }, text));
  };

  return _react["default"].createElement(_antd.List //  loading
  , {
    split: false,
    itemLayout: "vertical",
    size: "small",
    pagination: {
      onChange: function onChange(page) {
        console.log(page);
      },
      pageSize: 5
    },
    dataSource: articleList,
    renderItem: function renderItem(item) {
      return _react["default"].createElement(_antd.Skeleton, {
        loading: loading,
        active: true,
        paragraph: {
          rows: 4,
          width: '100%'
        }
      }, _react["default"].createElement(_antd.List.Item, {
        key: item.id,
        className: "list-item-card" // style={{ padding: '4px 0' }}

      }, _react["default"].createElement(_antd.Card, {
        style: {
          opacity: 0.9,
          margin: 0
        },
        size: "small",
        bordered: false
      }, _react["default"].createElement(_antd.List.Item.Meta, {
        style: {
          position: 'relative',
          overflow: 'hidden',
          margin: '5px 0'
        },
        title: _react["default"].createElement(_component.Link, {
          to: handleToDetail(item.id)
        }, _react["default"].createElement(Paragraph, {
          ellipsis: {
            rows: 1
          },
          className: "title-style",
          style: {
            marginBottom: 10,
            maxWidth: 480
          }
        }, _react["default"].createElement(_antd.Tag, {
          color: "magenta"
        }, item.categoryInfo.name), item.title), _react["default"].createElement(_antd.Divider, {
          className: "margin-0"
        })),
        avatar: //左边图片
        _react["default"].createElement(_component.Link, {
          to: handleToDetail(item.id)
        }, _react["default"].createElement("div", {
          className: "article-avatar"
        }, _react["default"].createElement("img", {
          className: "img-hover",
          alt: "logo",
          src: item.avatar || item.categoryInfo.avatar
        }))),
        description: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Paragraph, {
          ellipsis: {
            rows: 3
          }
        }, item.content), _react["default"].createElement("div", {
          style: {
            position: 'absolute',
            bottom: 0,
            width: 'calc(100% - 300px)'
          }
        }, _react["default"].createElement(IconText, {
          type: "clock-circle",
          text: (0, _moment["default"])(item.date).format('YYYY-MM-DD hh:mm:ss')
        }), _react["default"].createElement(IconText, {
          type: "read",
          text: item.viewCount
        }), _react["default"].createElement(IconText, {
          onClick: changeLikeCount.bind(_this, item.id),
          type: "like",
          style: {
            color: likeStatus[item.id] ? 'red' : 'block'
          },
          text: likeCount[item.id]
        }), _react["default"].createElement(IconText, {
          type: "message",
          text: item.commentCount
        }), _react["default"].createElement(_component.Link, {
          to: handleToDetail(item.id)
        }, _react["default"].createElement(_antd.Button, {
          size: "small",
          style: {
            "float": 'right'
          }
        }, "\u9605\u8BFB\u66F4\u591A"))))
      }))));
    }
  });
};

exports["default"] = _default;