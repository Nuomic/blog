"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _hook = require("react-imvc/hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = function _default(_ref) {
  var form = _ref.form;

  var _useCtrl = (0, _hook.useCtrl)(),
      handleSaveArticle = _useCtrl.handleSaveArticle;

  var getFieldDecorator = form.getFieldDecorator,
      getFieldValue = form.getFieldValue,
      setFieldsValue = form.setFieldsValue,
      validateFields = form.validateFields;

  var _useModelState = (0, _hook.useModelState)(),
      Editor = _useModelState.Editor,
      article = _useModelState.article;

  getFieldDecorator('content', {
    rules: [{
      required: true,
      message: '文章内容不能为空!'
    }],
    initialValue: article.content
  });

  var handleChange = function handleChange(content) {
    setFieldsValue({
      content: content
    });
  };

  var saveArticle = function saveArticle(e) {
    setFieldsValue({
      status: article.id ? article.status : '3'
    });
    validateFields(['title', 'content'], /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, fieldsValue) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!err) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return handleSaveArticle(fieldsValue);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  var addImg = function addImg() {};

  return /*#__PURE__*/_react["default"].createElement(Editor["default"], {
    style: {
      height: 'calc(100vh - 70px)'
    },
    onSave: saveArticle,
    addImg: addImg,
    value: getFieldValue('content'),
    onChange: function onChange(content) {
      return handleChange(content);
    },
    subfield: true,
    preview: true
  });
};

exports["default"] = _default;