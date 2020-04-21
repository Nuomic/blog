"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _hook = require("react-imvc/hook");

var _ArticleList = _interopRequireDefault(require("./ArticleList"));

var _CategoryForm = _interopRequireDefault(require("./CategoryForm"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var addTabs = _ref.addTabs,
      showConfirm = _ref.showConfirm;
  var state = (0, _hook.useModelState)();

  var _useCtrl = (0, _hook.useCtrl)(),
      handleDeleteCategory = _useCtrl.handleDeleteCategory;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalStatus = _useState2[0],
      setModalStatus = _useState2[1];

  var _useState3 = (0, _react.useState)(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      currentId = _useState4[0],
      setCurrentId = _useState4[1];

  var categoryList = state.categoryList;

  var handelModalStatus = function handelModalStatus(id) {
    setCurrentId(id);
    setModalStatus(!modalStatus);
  };

  var columns = [{
    title: /*#__PURE__*/_react["default"].createElement("div", null, "\u7C7B\u522B", /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      ghost: true,
      type: "primary",
      onClick: handelModalStatus.bind(_this, undefined),
      size: "small",
      icon: "plus",
      style: {
        marginLeft: 10
      }
    }, "\u65B0\u589E")),
    key: 'name',
    render: function render(text) {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          display: 'inline-block',
          width: 48,
          height: 48,
          verticalAlign: 'middle',
          background: "no-repeat center/100% url(".concat(text.avatar, ")")
        }
      }), /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          verticalAlign: 'middle',
          marginLeft: 10
        }
      }, text.name));
    }
  }, {
    title: /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        marginLeft: 15
      }
    }, "\u64CD\u4F5C"),
    key: 'action',
    render: function render(text) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        type: "link",
        onClick: addTabs.bind(_this, text.id, text.name, _ArticleList["default"])
      }, "\u7BA1\u7406"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        type: "link",
        onClick: handelModalStatus.bind(_this, text.id)
      }, "\u7F16\u8F91"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        type: "link",
        style: {
          color: 'red'
        },
        onClick: showConfirm.bind(_this, text, '是否要删除该栏目？', handleDeleteCategory)
      }, "\u5220\u9664"));
    }
  }, {
    title: '文章数',
    dataIndex: 'articleCount'
  }];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_CategoryForm["default"], {
    modalStatus: modalStatus,
    handelModalStatus: handelModalStatus,
    categoryId: currentId
  }), /*#__PURE__*/_react["default"].createElement(_antd.Table, {
    rowKey: "id",
    columns: columns,
    dataSource: categoryList
  }));
};

exports["default"] = _default;