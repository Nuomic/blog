"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _hook = require("react-imvc/hook");

var _Upload = _interopRequireDefault(require("./Upload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Item = _antd.Form.Item;

var _default = _antd.Form.create()(function (_ref) {
  var form = _ref.form,
      categoryId = _ref.categoryId,
      modalStatus = _ref.modalStatus,
      handelModalStatus = _ref.handelModalStatus;

  // console.log('categoryId', categoryId);
  var _useModelState = (0, _hook.useModelState)(),
      categoryList = _useModelState.categoryList;

  var _useCtrl = (0, _hook.useCtrl)(),
      handleSaveCategory = _useCtrl.handleSaveCategory;

  var category = categoryList && categoryList.find(function (item) {
    return item.id == categoryId;
  }) || {};
  var getFieldDecorator = form.getFieldDecorator,
      validateFields = form.validateFields,
      resetFields = form.resetFields;
  getFieldDecorator('avatar', {
    initialValue: category.avatar
  });

  var handleSubmit = function handleSubmit(e) {
    validateFields(function _callee(err, fieldsValue) {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!err) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              console.log('fieldsValue', fieldsValue);
              _context.next = 6;
              return regeneratorRuntime.awrap(handleSaveCategory(_objectSpread({}, category, {}, fieldsValue), handelModalStatus));

            case 6:
              resetFields();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    });
  };

  return _react["default"].createElement(_antd.Modal, {
    title: categoryId ? '编辑' : '新增',
    visible: modalStatus,
    onOk: handleSubmit,
    onCancel: handelModalStatus
  }, _react["default"].createElement(_antd.Form, null, _react["default"].createElement(Item, {
    label: "\u680F\u76EE\u540D\u79F0"
  }, getFieldDecorator('name', {
    initialValue: category.name
  })(_react["default"].createElement(_antd.Input, null))), _react["default"].createElement(Item, {
    label: "\u680F\u76EE\u7B80\u4ECB"
  }, getFieldDecorator('summary', {
    initialValue: category.summary
  })(_react["default"].createElement(_antd.Input, null))), _react["default"].createElement(Item, {
    label: "\u680F\u76EE\u914D\u56FE"
  }, _react["default"].createElement(_Upload["default"], {
    form: form,
    url: category.avatar
  }))));
});

exports["default"] = _default;