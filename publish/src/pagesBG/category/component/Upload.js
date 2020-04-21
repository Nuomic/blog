"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _antd = require("antd");

var _react = _interopRequireWildcard(require("react"));

var _api = _interopRequireDefault(require("../../api"));

var _hook = require("react-imvc/hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var url = _ref.url,
      form = _ref.form;
  console.log('url', url);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var getFieldDecorator = form.getFieldDecorator,
      setFieldsValue = form.setFieldsValue,
      getFieldValue = form.getFieldValue; // getFieldDecorator('avatar');

  var _useModelState = (0, _hook.useModelState)(),
      restapi = _useModelState.restapi;

  var props = {
    accept: 'image/*',
    name: 'file',
    data: function data(file) {
      return {
        folder: 'image'
      };
    },
    action: restapi + _api["default"].uploadFile,
    onChange: function onChange(info) {
      var _info$file = info.file,
          status = _info$file.status,
          response = _info$file.response;
      console.log('info', info);
      console.log('status', status);
      setLoading(true);

      if (status === 'done') {
        notification.success({
          message: '上传成功',
          description: "".concat(info.file.name, " \u6587\u4EF6\u4E0A\u4F20\u6210\u529F\uFF01.")
        });
      } else if (status === 'error') {
        notification.error({
          message: '上传失败',
          description: "".concat(info.file.name, " \u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\uFF01.")
        });
      }

      setLoading(false);
    },
    showUploadList: {
      showPreviewIcon: false,
      showRemoveIcon: true,
      showDownloadIcon: false
    }
  };

  var uploadButton = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
    type: loading ? 'loading' : 'plus'
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ant-upload-text"
  }, "Upload"));

  return /*#__PURE__*/_react["default"].createElement(_antd.Upload, _extends({}, props, {
    listType: "picture-card",
    className: "avatar-uploader",
    fileList: getFieldValue('avatar')
  }), getFieldValue('avatar') ? /*#__PURE__*/_react["default"].createElement("img", {
    src: getFieldValue('avatar'),
    alt: "avatar",
    style: {
      width: '100%'
    }
  }) : uploadButton);
};

exports["default"] = _default;