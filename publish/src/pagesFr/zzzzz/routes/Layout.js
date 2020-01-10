"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Page;

var _react = _interopRequireDefault(require("react"));

var _Script = _interopRequireDefault(require("react-imvc/component/Script"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Page(props) {
  return _react["default"].createElement("html", null, _react["default"].createElement("head", null, _react["default"].createElement("meta", {
    charSet: "utf-8"
  }), _react["default"].createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui"
  }), _react["default"].createElement("meta", {
    content: "yes",
    name: "apple-mobile-web-app-capable"
  }), _react["default"].createElement("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent"
  }), _react["default"].createElement("meta", {
    content: "black",
    name: "apple-mobile-web-app-status-bar-style"
  }), _react["default"].createElement("title", null, props.title), _react["default"].createElement("meta", {
    name: "description",
    content: props.description
  }), _react["default"].createElement("meta", {
    name: "keywords",
    content: props.keywords
  })), _react["default"].createElement("body", null, _react["default"].createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: props.content
    }
  }), _react["default"].createElement("div", {
    id: "modal"
  }), _react["default"].createElement("input", {
    type: "hidden",
    id: "page_id",
    value: "wait"
  }), _react["default"].createElement(_Script["default"], null, "\n            (function() {\n              window.__INITIAL_STATE__ = ".concat(JSON.stringify(props.initialState), "\n              window.__APP_SETTINGS__ = ").concat(JSON.stringify(props.appSettings), "\n              window.__PUBLIC_PATH__ = '").concat(props.publicPath, "'\n            })()\n          ")), _react["default"].createElement("script", {
    src: "".concat(props.publicPath, "/").concat(props.assets.vendor)
  }), props.ubt, props.bridge, props.weixinSdk, _react["default"].createElement("script", {
    src: "".concat(props.publicPath, "/").concat(props.assets.index)
  }), _react["default"].createElement("script", {
    src: "//webresint.sh.ctriptravel.com/ares2/infosec/ifs/*/default/lab.min.js?expires=1s"
  })));
}