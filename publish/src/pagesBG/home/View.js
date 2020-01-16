"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _g2plot = require("@antv/g2plot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default() {
  var bdList = [// {
    //   name: '首页'
    // }
  ];
  (0, _react.useEffect)(function () {
    if (!container.current) {
      console.log('container.current', container.current);
      return;
    }

    console.log('container.current', container.current);
    var bar = new _g2plot.Line(container.current, {
      data: data,
      xField: 'year',
      yField: 'value'
    });
    return bar.render();
  }, []);
  var container = (0, _react.useRef)(null);
  var data = [{
    year: '1991',
    value: 3
  }, {
    year: '1992',
    value: 4
  }, {
    year: '1993',
    value: 3.5
  }, {
    year: '1994',
    value: 5
  }, {
    year: '1995',
    value: 4.9
  }, {
    year: '1996',
    value: 6
  }, {
    year: '1997',
    value: 7
  }, {
    year: '1998',
    value: 9
  }, {
    year: '1999',
    value: 13
  }];
  return _react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  }, "\u9996\u9875 // \u7AD9\u70B9\u76D1\u63A7 \u7AD9\u70B9\u603B\u89C8 \u7AD9\u70B9\u7EDF\u8BA1", _react["default"].createElement("div", {
    ref: container
  }));
};

exports["default"] = _default;