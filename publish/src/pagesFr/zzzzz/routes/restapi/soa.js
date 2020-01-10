"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _querystring = _interopRequireDefault(require("querystring"));

var _imvc = _interopRequireDefault(require("../../imvc.config"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var router = (0, _express.Router)();
var _default = router;
exports["default"] = _default;
var restapiMap = {
  fat: 'http://webapi.soa.fws.qa.nt.ctripcorp.com',
  uat: 'http://webapi.soa.uat.qa.nt.ctripcorp.com',
  prod: 'http://webapi.soa.ctripcorp.com'
};
var restapiBasename = restapiMap[_imvc["default"].env];
var host = restapiBasename.substr(7);
/**
 * 将前端的请求转发给内网 restapi 接口，解决跨域和数据格式等问题
 * code 服务号，name，接口名
 * example:
 * 输入：/10124/GetAdvisorEvent
 * 输出：http://webapi.soa.fws.qa.nt.ctripcorp.com/api/11679/json/GetAdvisorEvent
 */

router.use('/:code/:name', function _callee(req, res, next) {
  var params, headers, reqHost, isOffline, isLocalhost, url, options, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          params = req.params, headers = req.headers;
          reqHost = headers.origin || headers.host || '';
          isOffline = reqHost.includes('.ctripcorp.com');
          isLocalhost = ['127.0.0.1', 'localhost'].some(function (i) {
            return reqHost.includes(i);
          }); // soa只能内网域名请求,否则会有内网渗透的隐患,如果不是内网请求的则交给gateway处理
          // localhost是本地Fiddler代理或服务器内部请求，本地转发到soa不是公司内网也会访问不了webapi

          if (!(!isOffline && !isLocalhost)) {
            _context.next = 7;
            break;
          }

          next();
          return _context.abrupt("return");

        case 7:
          url = "".concat(restapiBasename, "/api/").concat(params.code, "/").concat(params.name, "?").concat(_querystring["default"].stringify(req.query));
          options = {
            method: req.method,
            headers: _objectSpread({}, req.headers, {
              host: host,
              cookie: (0, _util.getCookie)(req.cookies)
            }),
            body: req.body ? JSON.stringify(req.body) : null
          }; // https://github.com/bitinn/node-fetch/blob/master/src/body.js
          // 删除content-length让node-fetch处理

          delete options.headers['content-length'];
          _context.prev = 10;
          _context.next = 13;
          return regeneratorRuntime.awrap(fetch(url, options));

        case 13:
          response = _context.sent;
          res.type('application/json');
          response.body.pipe(res);
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](10);
          next(_context.t0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[10, 18]]);
});