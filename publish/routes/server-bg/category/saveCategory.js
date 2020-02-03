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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(req, res) {
  var returnStatus = {
    customerErrorMessage: '保存失败',
    errorCode: '1',
    isSuccess: false
  };

  var _req$body = req.body,
      id = _req$body.id,
      updatedAt = _req$body.updatedAt,
      createdAt = _req$body.createdAt,
      value = _objectWithoutProperties(_req$body, ["id", "updatedAt", "createdAt"]);

  if (!id) {
    _db.CategoryModel.create(_objectSpread({}, value, {
      avatar: value.avatar || 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      articleCount: 0
    }), function (err, category) {
      category = _objectSpread({
        id: category._id
      }, category._doc);
      delete category._id;
      if (!err) res.json(_objectSpread({}, _config.resTemp, {}, category));else {
        res.json(_objectSpread({}, _config.resTemp, {
          returnStatus: _objectSpread({}, returnStatus, {
            errorMessage: err
          })
        }));
      }
    });
  } else {
    _db.CategoryModel.findByIdAndUpdate(id, value, function (err) {
      if (!err) res.json(_config.resTemp);else {
        res.json(_objectSpread({}, _config.resTemp, {
          returnStatus: _objectSpread({}, returnStatus, {
            errorMessage: err
          })
        }));
      }
    });
  }
};

exports["default"] = _default;