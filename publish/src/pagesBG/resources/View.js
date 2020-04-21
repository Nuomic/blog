"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _StickyTabs = _interopRequireDefault(require("../components/StickyTabs"));

var _hook = require("react-imvc/hook");

var _antd = require("antd");

var _FileUpload = _interopRequireDefault(require("./components/FileUpload"));

var _FileItem = _interopRequireDefault(require("./components/FileItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var TabPane = _antd.Tabs.TabPane;
var confirm = _antd.Modal.confirm;

var _default = function _default() {
  var _useModelState = (0, _hook.useModelState)(),
      _useModelState$resour = _useModelState.resourceList,
      resourceList = _useModelState$resour === void 0 ? [] : _useModelState$resour;

  var _useCtrl = (0, _hook.useCtrl)(),
      handleDeleteResource = _useCtrl.handleDeleteResource;

  var bdList = [{
    name: '首页',
    href: '/admin'
  }, {
    name: '资源管理'
  }];
  console.log('resourceList', resourceList); //配置状态

  var resourceStatus = [{
    tabName: '全部',
    key: '0'
  }, {
    tabName: '图片',
    key: 'image'
  }, {
    tabName: '文本',
    key: 'text'
  }, {
    tabName: '音频',
    key: 'audio'
  }, {
    tabName: '视频',
    key: 'video'
  }, {
    tabName: '压缩文件',
    key: 'compressed'
  }, {
    tabName: '回收站',
    key: '-1'
  }, {
    tabName: '上传资源',
    key: 'upload'
  }];

  var filterData = function filterData(key) {
    if (key == '0') return resourceList.filter(function (item) {
      return !item.isTrash;
    });
    if (key == '-1') return resourceList.filter(function (item) {
      return item.isTrash;
    });
    return resourceList.filter(function (item) {
      return item.type == key && !item.isTrash;
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  }, /*#__PURE__*/_react["default"].createElement(_StickyTabs["default"], null, resourceStatus && resourceStatus.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(TabPane, {
      tab: item.key == '-1' ? /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          color: 'red'
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
        type: "delete"
      }), item.tabName + " (".concat(filterData(item.key).length, ")")) : item.key !== 'upload' ? item.tabName + " (".concat(filterData(item.key).length, ")") : /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          color: 'green'
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
        type: "upload"
      }), item.tabName),
      key: item.key
    }, item.key == '-1' && /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      disabled: !filterData(item.key).length,
      style: {
        color: 'red'
      },
      onClick: function onClick() {
        return confirm({
          title: '是否清空回收站',
          okType: 'danger',
          content: '一经删除，该资源无法找回',
          onOk: function () {
            var _onOk = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return handleDeleteResource(filterData(item.key).map(function (item) {
                        return item.id;
                      }).join(','));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function onOk() {
              return _onOk.apply(this, arguments);
            }

            return onOk;
          }(),
          onCancel: function onCancel() {}
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
      type: "delete"
    }), " \u6E05\u7A7A\u56DE\u6536\u7AD9")), item.key == 'upload' && /*#__PURE__*/_react["default"].createElement(_FileUpload["default"], null) || filterData(item.key).map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_FileItem["default"], {
        item: item,
        key: item.id
      });
    }));
  })));
};

exports["default"] = _default;