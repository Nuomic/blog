"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _antd = require("antd");

var _ActionList = _interopRequireDefault(require("./component/ActionList"));

var _StickyTabs = _interopRequireDefault(require("../components/StickyTabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var confirm = _antd.Modal.confirm;
var TabPane = _antd.Tabs.TabPane;

var _default = function _default(_ref) {
  var state = _ref.state;
  console.log('state', state);
  var bdList = [{
    name: '首页',
    href: '/admin'
  }, {
    name: '个人中心'
  }];

  var _useState = (0, _react.useState)('0'),
      _useState2 = _slicedToArray(_useState, 2),
      activeKey = _useState2[0],
      setActiveKey = _useState2[1];

  var _useState3 = (0, _react.useState)([{
    key: '0',
    name: '栏目',
    content: _ActionList["default"]
  }]),
      _useState4 = _slicedToArray(_useState3, 2),
      tabList = _useState4[0],
      setTabList = _useState4[1]; //删除提示框


  var showConfirm = function showConfirm(id, title, _onOk) {
    confirm({
      title: title,
      onOk: function () {
        var _onOk2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _onOk(id);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function onOk() {
          return _onOk2.apply(this, arguments);
        }

        return onOk;
      }(),
      onCancel: function onCancel() {}
    });
  };

  var addTabs = function addTabs(key, name, content) {
    setActiveKey(key);

    if (!tabList.some(function (item) {
      return item.key == key;
    })) {
      setTabList([].concat(_toConsumableArray(tabList), [{
        key: key,
        name: name,
        content: content
      }]));
    }
  };

  var onChange = function onChange(activeKey) {
    setActiveKey(activeKey);
  };

  var remove = function remove(targetKey) {
    var index = tabList.findIndex(function (item) {
      return item.key == targetKey;
    }) - 1;
    if (targetKey == activeKey) setActiveKey(tabList[index].key);
    setTabList(tabList.filter(function (item) {
      return item.key != targetKey;
    }));
  };

  var onEdit = function onEdit(targetKey, action) {
    action == 'remove' && remove(targetKey);
  };

  return /*#__PURE__*/_react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  }, /*#__PURE__*/_react["default"].createElement(_StickyTabs["default"], {
    hideAdd: true,
    onChange: onChange,
    onEdit: onEdit,
    activeKey: activeKey,
    type: "editable-card"
  }, tabList && tabList.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(TabPane, {
      tab: item.name,
      key: item.key,
      closable: index !== 0
    }, /*#__PURE__*/_react["default"].createElement(item.content, {
      addTabs: addTabs,
      showConfirm: showConfirm,
      id: item.key
    }));
  })));
};

exports["default"] = _default;