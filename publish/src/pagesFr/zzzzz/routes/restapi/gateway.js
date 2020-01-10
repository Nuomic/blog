"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _util = require("./util");

var _imvc = _interopRequireDefault(require("../../imvc.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var router = (0, _express.Router)();
var _default = router;
exports["default"] = _default;
var restapiMap = {
  fat: 'http://gateway.m.fws.qa.nt.ctripcorp.com/restapi/soa2',
  uat: 'http://gateway.m.uat.qa.nt.ctripcorp.com/restapi/soa2',
  prod: 'http://apigateway.ctripcorp.com/restapi/soa2'
};
var restapiBasename = restapiMap[_imvc["default"].env];
var host = restapiBasename.substr(7).split('/')[0];
/**
 * 将前端的请求转发给内网 restapi 接口，解决跨域和数据格式等问题
 * code 服务号，name，接口名
 * example:
 * 输入：/10258/GetUserCommunityInfo
 * 输出：http://gateway.m.fws.qa.nt.ctripcorp.com/restapi/soa2/10258/GetUserCommunityInfo
 */

router.use(function _callee(req, res, next) {
  var params, url, options, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          params = req.params;
          url = restapiBasename + req.url;
          options = {
            method: req.method,
            headers: _objectSpread({}, req.headers, {
              host: host,
              cookie: (0, _util.getCookie)(req.cookies)
            }),
            body: /^post$/i.test(req.method) && req.body ? JSON.stringify(req.body) : null
          };
          /**
          * req.headers['content-length'] 可能不等于 JSON.stringify(req.body).length
          * 如果有 body，专门设置一下 content-length
          */

          if (options.body) {
            options.headers['content-length'] = Buffer.byteLength(options.body);
          }

          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])(url, options));

        case 7:
          response = _context.sent;
          res.type('application/json');
          response.body.pipe(res);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](4);
          next(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 12]]);
});