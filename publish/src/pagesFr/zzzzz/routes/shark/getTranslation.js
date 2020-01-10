"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _sharkSdk = _interopRequireDefault(require("@ctrip/shark-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
var _default = router;
exports["default"] = _default;

var initShark = _sharkSdk["default"].init({
  appID: '100020553'
});

var prepareShark = function prepareShark(req, res, next) {
  initShark.then(function () {
    return next();
  });
};

router.use(prepareShark, function _callee(req, res, next) {
  var _req$body, _req$body$locale, locale, _req$body$group, group, _req$body$pageName, pageName, lang, i18n;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, _req$body$locale = _req$body.locale, locale = _req$body$locale === void 0 ? 'zh-CN' : _req$body$locale, _req$body$group = _req$body.group, group = _req$body$group === void 0 ? 'trip' : _req$body$group, _req$body$pageName = _req$body.pageName, pageName = _req$body$pageName === void 0 ? '' : _req$body$pageName;
          lang = {};

          try {
            i18n = _sharkSdk["default"].dump(locale);

            if (Array.isArray(pageName)) {
              pageName.forEach(function (item) {
                Object.assign(lang, filterResultByPageName(i18n, item));
              });
            } else {
              lang = filterResultByPageName(i18n, pageName);
            }

            res.json(lang);
          } catch (error) {
            console.log('error', error);
            next(error);
          }

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});

var getRealKeyName = function getRealKeyName(key, pageName) {
  return key.replace(/^key\./, '').replace("".concat(pageName, "."), '');
};

var filterResultByPageName = function filterResultByPageName() {
  var i18n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var pageName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var obj = {};
  Object.keys(i18n).filter(function (key) {
    return key.startsWith("key.".concat(pageName, ".")) || key.startsWith('key.common.');
  }).map(function (mapItem) {
    var name = getRealKeyName(mapItem, pageName);
    var tempObj = {};
    tempObj[name] = i18n[mapItem];
    Object.assign(obj, tempObj);
  });
  return obj;
};