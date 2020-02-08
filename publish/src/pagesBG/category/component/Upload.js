"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var url = _ref.url,
      form = _ref.form;

  var _useState = (0, _react.useState)({
    loading: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var getFieldDecorator = form.getFieldDecorator,
      setFieldsValue = form.setFieldsValue,
      getFieldValue = form.getFieldValue; // getFieldDecorator('avatar');

  var _useModelState = (0, _hook.useModelState)(),
      restapi = _useModelState.restapi;

  var getBase64 = function getBase64(img, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      return callback(reader.result);
    });
    reader.readAsDataURL(img);
  };

  var beforeUpload = function beforeUpload(file) {
    var isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
      _antd.message.error('You can only upload JPG/PNG file!');
    }

    var isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      _antd.message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
  };

  var handleChange = function handleChange(info) {
    if (info.file.status === 'uploading') {
      setState({
        loading: true
      });
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, function (imageUrl) {
        setState({
          loading: false
        });
        setFieldsValue({
          avatar: imageUrl
        });
      });
    }
  };

  var uploadButton = _react["default"].createElement("div", null, _react["default"].createElement(_antd.Icon, {
    type: state.loading ? 'loading' : 'plus'
  }), _react["default"].createElement("div", {
    className: "ant-upload-text"
  }, "Upload"));

  return _react["default"].createElement(_antd.Upload, {
    name: "avatar",
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    action: restapi + _api["default"].uploadFile // beforeUpload={beforeUpload}
    // onChange={handleChange}
    // fileList={getFieldValue('avatar')}

  }, getFieldValue('avatar') ? _react["default"].createElement("img", {
    src: getFieldValue('avatar'),
    alt: "avatar",
    style: {
      width: '100%'
    }
  }) : uploadButton);
};

exports["default"] = _default;