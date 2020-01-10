"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
var _default = router;
exports["default"] = _default;
router.use(function _callee(req, res, next) {
  var xForwardedForIp, ip;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            xForwardedForIp = req.headers['X-Forwarded-For'] || '';
            xForwardedForIp = xForwardedForIp.split(',');
            ip = xForwardedForIp[xForwardedForIp.length - 1] || req.headers['X-Forwarded-For'] || req.headers['x-real-ip'] || req.ip;
            res.type('application/json');
            res.json({
              ip: ip
            });
          } catch (error) {
            next(error);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});