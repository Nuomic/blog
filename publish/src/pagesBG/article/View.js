"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = require("react-imvc/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Editor from 'for-editor';
var _default = function _default() {
  // const [editorValue, setEditorValue] = useState();
  // const handleChange = editorValue => {
  //   setEditorValue(editorValue);
  // };
  return _react["default"].createElement("div", null, _react["default"].createElement(_component.Style, {
    name: "braft"
  }), _react["default"].createElement(_component.Style, {
    name: "output"
  }), "aaaa");
};

exports["default"] = _default;