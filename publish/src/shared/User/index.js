"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _querystring = _interopRequireDefault(require("querystring"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 登录地址
var loginUrlMap = {
  fat: "https://passport.fat466.qa.nt.ctripcorp.com/user/login",
  uat: "https://passport.ctrip.uat.qa.nt.ctripcorp.com/user/login",
  prod: "https://passport.ctrip.com/user/login"
}; // ServerDomainMap

var ServerDomainMap = {
  fat: 'http://gateway.m.fws.qa.nt.ctripcorp.com',
  uat: 'http://gateway.m.uat.qa.nt.ctripcorp.com',
  prod: 'http://apigateway.ctripcorp.com'
}; // ClientDomainMap

var ClientDomainMap = {
  fat: '//online.ctrip.fws.qa.nt.ctripcorp.com',
  uat: '//online.ctrip.uat.qa.nt.ctripcorp.com',
  prod: '//online.ctrip.com'
};

var User =
/*#__PURE__*/
function () {
  function User(context) {
    _classCallCheck(this, User);

    this.context = context;
  }

  _createClass(User, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch() {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function () {
      return fetch.apply(void 0, arguments);
    })
  }, {
    key: "getUserInfo",
    value: function getUserInfo(url) {
      var context, domain, postData, options, response, result, data, UserInfo, others, userInfo;
      return regeneratorRuntime.async(function getUserInfo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              context = this.context;

              if (!context.hasOwnProperty('userInfo')) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", context.userInfo);

            case 3:
              if (!url) {
                domain = '';

                if (context.isServer) {
                  domain = ServerDomainMap[context.env];
                } else {
                  domain = ClientDomainMap[context.env];
                }

                url = "".concat(domain, "/restapi/soa2/12446/GetUserInfo.json");
              }

              postData = {
                RequestType: [1, 2]
              };
              options = {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                  cookieorigin: (0, _util.getCookieOriginByContext)(context)
                },
                body: JSON.stringify(postData)
              };

              if (context.isServer) {
                options.headers.cookie = context.req.headers.cookie;
              }

              _context.prev = 7;
              _context.next = 10;
              return regeneratorRuntime.awrap(this.fetch(url, options));

            case 10:
              response = _context.sent;
              _context.next = 13;
              return regeneratorRuntime.awrap(response.json());

            case 13:
              result = _context.sent;
              data = result.Data || {};
              UserInfo = data.UserInfo, others = _objectWithoutProperties(data, ["UserInfo"]);
              userInfo = _objectSpread({}, others, {}, data.UserInfo);
              return _context.abrupt("return", context.userInfo = userInfo);

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](7);
              console.error('getUserInfo', _context.t0);
              return _context.abrupt("return", null);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[7, 20]]);
    }
  }, {
    key: "login",
    value: function login() {
      var context = this.context;
      var loginUrl = loginUrlMap[context.env];
      var query = {
        backurl: (0, _util.getUrl)(context)
      };
      var targetUrl = "".concat(loginUrl, "?").concat(_querystring["default"].stringify(query));
      (0, _util.redirect)(context, targetUrl);
    }
  }, {
    key: "isLogin",
    value: function isLogin() {
      var userInfo = this.context.userInfo;
      return !!(userInfo && userInfo.IsLogin);
    }
  }]);

  return User;
}();

exports["default"] = User;