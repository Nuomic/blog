"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _Article = _interopRequireDefault(require("../components/Article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  console.log('props', props);
  return /*#__PURE__*/_react["default"].createElement(_BasicLayout["default"], null, /*#__PURE__*/_react["default"].createElement(_Article["default"], null));
};

exports["default"] = _default;