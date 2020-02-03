"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbUrl = exports.restapi = exports.dataTemp = exports.resTemp = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var resTemp = {
  ResponseStatus: {
    Ack: 'Success',
    Timestamp: new Date()
  },
  returnStatus: {
    customerErrorMessage: null,
    errorCode: '0',
    errorMessage: null,
    isSuccess: true
  }
};
exports.resTemp = resTemp;

var dataTemp = function dataTemp(data) {
  return data.map(function (item) {
    var id = item._id;
    delete item._doc._id;
    return _objectSpread({
      id: id
    }, item._doc);
  });
};

exports.dataTemp = dataTemp;
var restapi = '/server';
exports.restapi = restapi;
var dbUrl = 'mongodb://zwq:zwq997957@zwq666.top:27017/blogDB';
exports.dbUrl = dbUrl;