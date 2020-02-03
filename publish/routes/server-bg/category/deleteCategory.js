"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require("../../config");

var _db = require("../../db");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(req, res) {
  var returnStatus = {
    customerErrorMessage: '删除失败',
    errorCode: '1',
    isSuccess: false
  };
  var categoryId = req.body.categoryId;

  if (!!categoryId) {
    _db.CategoryModel.findByIdAndDelete(categoryId, function (err) {
      if (!err) res.json(_objectSpread({}, _config.resTemp));else {
        res.json(_objectSpread({}, _config.resTemp, {
          returnStatus: _objectSpread({}, returnStatus, {
            errorMessage: err
          })
        }));
      }
    });
  } else {
    res.json(_objectSpread({}, _config.resTemp, {
      returnStatus: _objectSpread({}, returnStatus, {
        errorMessage: err
      })
    }));
  }
};

exports["default"] = _default;