"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _hook = require("react-imvc/hook");

var _component = require("react-imvc/component");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var confirm = _antd.Modal.confirm;
var Item = _antd.Form.Item;
var Option = _antd.Select.Option;

var _default = function _default(_ref) {
  var id = _ref.id;

  var _useModelState = (0, _hook.useModelState)(),
      categoryList = _useModelState.categoryList;

  var _useCtrl = (0, _hook.useCtrl)(),
      handleGetArticleList = _useCtrl.handleGetArticleList,
      handleChangeArticleListFromCategory = _useCtrl.handleChangeArticleListFromCategory;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedRowKeys = _useState2[0],
      setSelectedRowKeys = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      articleList = _useState4[0],
      setArticleList = _useState4[1];

  (0, _react.useEffect)(function () {
    return setSelectedRowKeys([]);
  }, [articleList]);
  (0, _react.useEffect)(function () {
    handleGetArticleList(id, setArticleList);
  }, []);
  var hasSelected = selectedRowKeys.length > 0;

  var showConfirm = function showConfirm(tocategoryId) {
    confirm({
      title: '是否将所选的文章移动到其他栏目',
      onOk: function onOk() {
        return regeneratorRuntime.async(function onOk$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(handleChangeArticleListFromCategory(selectedRowKeys, id, tocategoryId, articleList, setArticleList));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        });
      },
      onCancel: function onCancel() {}
    });
  };

  var ActionForm = _antd.Form.create()(function (_ref2) {
    var form = _ref2.form;
    var getFieldDecorator = form.getFieldDecorator,
        validateFields = form.validateFields;

    var handleSubmit = function handleSubmit(e) {
      e.preventDefault();
      validateFields(function (err, values) {
        if (!err) {
          showConfirm(values.categoryId);
        }
      });
    };

    return _react["default"].createElement(_antd.Form, {
      layout: "inline",
      onSubmit: handleSubmit
    }, _react["default"].createElement(Item, null, _react["default"].createElement("span", {
      style: {
        marginLeft: 8
      }
    }, hasSelected ? "\u5C06\u8FD9 ".concat(selectedRowKeys.length, " \u9879\u79FB\u52A8\u5230   ") : ''), getFieldDecorator('categoryId', {
      rules: [{
        required: true,
        message: '请选择要移动到的栏目'
      }]
    })(_react["default"].createElement(_antd.Select, {
      placeholder: "\u9009\u62E9\u8981\u79FB\u52A8\u5230\u7684\u680F\u76EE",
      style: {
        width: 200
      }
    }, categoryList && categoryList.filter(function (item) {
      return item.id != id;
    }).map(function (item) {
      return _react["default"].createElement(Option, {
        key: item.id
      }, item.name);
    })))), _react["default"].createElement(Item, null, _react["default"].createElement(_antd.Button, {
      type: "primary",
      htmlType: "submit",
      disabled: !hasSelected
    }, "\u5E94\u7528")));
  });

  var columns = [{
    title: _react["default"].createElement(ActionForm, null),
    colSpan: 2,
    align: 'left',
    dataIndex: 'title',
    width: '70%'
  }, {
    title: '',
    colSpan: 0,
    render: function render(text) {
      return _react["default"].createElement(_component.Link, {
        to: "/articledetail/".concat(text.id),
        target: "blank"
      }, "\u67E5\u770B");
    }
  }];

  var onSelectChange = function onSelectChange(selectedRowKeys) {
    setSelectedRowKeys(selectedRowKeys);
  };

  var rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: onSelectChange
  };
  return _react["default"].createElement(_antd.Table, {
    rowKey: "id",
    rowSelection: rowSelection,
    columns: columns,
    dataSource: articleList
  });
};

exports["default"] = _default;