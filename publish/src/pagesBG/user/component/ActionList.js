"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _BlogDesc = _interopRequireDefault(require("./BlogDesc"));

var _Password = _interopRequireDefault(require("./Password"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var addTabs = _ref.addTabs;
  var actionList = [{
    key: '1',
    name: '博客介绍',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    content: _BlogDesc["default"]
  }, {
    key: '2',
    name: '修改密码',
    imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    content: _Password["default"]
  } // {
  //   key: '3',
  //   name: '主题配色',
  //   imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  //   content: BlogDesc,
  // },
  // {
  //   key: '4',
  //   name: '关于我',
  //   imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  //   content: BlogDesc,
  // },
  ];
  return _react["default"].createElement(_antd.Row, {
    gutter: 16
  }, actionList.map(function (item) {
    return _react["default"].createElement(_antd.Col, {
      xs: 12,
      lg: 8,
      xl: 6,
      xxl: 4,
      key: item.key,
      onClick: addTabs.bind(_this, item.key, item.name, item.content)
    }, _react["default"].createElement(_antd.Card, {
      hoverable: true,
      cover: _react["default"].createElement("img", {
        alt: "example",
        src: item.imgUrl
      })
    }, _react["default"].createElement(_antd.Card.Meta, {
      title: item.name,
      description: item.desc,
      style: {
        textAlign: 'center'
      }
    })));
  }));
};

exports["default"] = _default;