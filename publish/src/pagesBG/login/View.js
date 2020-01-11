"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function View(props) {
  console.log('props', props);
  return _react["default"].createElement("h1", null, "Hello React-IMVC \u6211\u662F\u540E\u53F0");
}

var _default = View;
exports["default"] = _default;