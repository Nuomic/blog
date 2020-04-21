"use strict";

var _reactImvc = require("react-imvc");

var _imvc = _interopRequireDefault(require("./imvc.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 设置环境变量为生产模式
process.env.NODE_ENV = 'production'; // 引入 react-imvc

// 将配置部分修改为生产模式
var productionConfig = _objectSpread({}, _imvc["default"], {
  root: __dirname,
  logger: 'dev'
}); // 启动 react-imvc 应用


(0, _reactImvc.start)({
  config: productionConfig
}); // 除了 start 方法以外，还有 build 方法，可以对 react-imvc 项目进行构建

(0, _reactImvc.build)({
  config: productionConfig
});