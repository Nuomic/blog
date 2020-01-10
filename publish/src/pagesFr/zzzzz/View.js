"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _MyTable = _interopRequireDefault(require("./components/MyTable"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var data = [{
    id: 1,
    name: 'zhangsan',
    age: 18,
    address: '上海',
    family: [{
      father: 'zhangsss',
      mother: 'lissss',
      children: 'zhangaaa'
    }, {
      father: 'zhangsss',
      mother: 'lissss',
      children: 'zhangaaa'
    }, {
      father: 'zhangsss',
      mother: 'lissss',
      children: 'zhangaaa'
    }]
  }, {
    id: 2,
    name: 'dasd',
    age: 11,
    address: '背景',
    family: [{
      father: 'dasd',
      mother: 'dsad',
      children: 'zhadasdngaaa'
    }]
  }, {
    id: 3,
    name: 'dasda',
    age: 33,
    address: '南仓',
    family: [{
      father: '实打实',
      mother: 'li实打实ssss',
      children: '大'
    }]
  }];
  var row = [{
    title: 'name'
  }, {
    title: 'age'
  }, {
    title: 'address'
  }, {
    render: function render(text) {
      console.log('text', text);
      return _react["default"].createElement(_antd.Button, null, "ssss");
    }
  }];
  var columns = [{
    title: '父亲',
    dataIndex: 'father'
  }, {
    title: '母亲',
    dataIndex: 'mother'
  }, {
    title: '孩子',
    dataIndex: 'children',
    render: function render(text) {
      return text.children;
    }
  }, {
    title: '操作',
    render: function render(text) {
      return _react["default"].createElement(_antd.Button, {
        onClick: handleClick.bind(_this, text)
      });
    }
  }];
  var colSpan = 3;
  var colName = 'family';

  var handleClick = function handleClick(text) {
    console.log(text);
  };

  return _react["default"].createElement(_MyTable["default"], {
    data: data,
    row: row,
    columns: columns,
    colSpan: colSpan,
    colName: colName
  });
};

exports["default"] = _default;