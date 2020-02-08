"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _component = require("react-imvc/component");

var _Title = _interopRequireDefault(require("./components/Title"));

var _Editor = _interopRequireDefault(require("./components/Editor"));

var _SaveModal = _interopRequireDefault(require("./components/SaveModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _antd.Form.create()(function (_ref) {
  var form = _ref.form,
      state = _ref.state;
  return _react["default"].createElement("div", {
    style: {
      padding: 10,
      backgroundColor: '#f8f8f8'
    }
  }, _react["default"].createElement(_component.Style, {
    name: "antd"
  }), _react["default"].createElement(_component.Style, {
    name: "antdPro"
  }), _react["default"].createElement(_component.Style, {
    name: "customize"
  }), _react["default"].createElement(_component.Style, {
    name: "commonBG"
  }), _react["default"].createElement(_Title["default"], {
    form: form,
    modalStatus: state.modalStatus,
    title: state.article.title
  }), _react["default"].createElement(_Editor["default"], {
    form: form
  }), _react["default"].createElement(_SaveModal["default"], {
    form: form,
    modalStatus: state.modalStatus
  }));
});

exports["default"] = _default;