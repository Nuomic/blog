"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = attachUbt;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 根据 APPType 和 req.host 动态判断环境，添加 ubt 脚本
 */
function attachUbt(req, res, next) {
  var type = getType(res.locals.AppType, req.hostname);
  res.locals.ubt = getUbt(type);
  next();
}

function getType(AppType, host) {
  var type = AppType && AppType["default"] ? AppType["default"] : "pc";

  if (!AppType) {
    return type;
  }

  if (AppType.h5) {
    var isMatch = AppType.h5.find(function (item) {
      return item === host;
    });

    if (isMatch) {
      type = "h5";
    }
  } else if (AppType.pc) {
    var _isMatch = AppType.pc.find(function (item) {
      return item === host;
    });

    if (_isMatch) {
      type = "pc";
    }
  }

  return type;
}

function getUbt(type) {
  var scripts = {
    pc: "_bfa.min.js",
    h5: "_mubt.min.js"
  };
  var script = scripts[type];

  if (!script) {
    return null;
  }

  return _react["default"].createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "\n            ; (function() {\n                window.__bfi = window.__bfi || [];\n                if (! (window.$_bf && window.$_bf.loaded || window.$LAB || window.CtripJsLoader)) {\n                    var a = new Date,\n                    b = !1,\n                    c = \"?v=\" + a.getFullYear() + a.getMonth() + \"_\" + a.getDate(),\n                    a = document.createElement(\"script\");\n                    a.type = \"text/javascript\";\n                    a.charset = \"utf-8\";\n                    a.async = !0;\n                    try {\n                        b = \"https:\" == location.protocol\n                    } catch(d) {}\n                    a.src = ((b ? \"https:\": \"http:\")) + \"//webresource.c-ctrip.com/code/ubt/".concat(script, "\" + c;\n                    b = document.getElementsByTagName(\"script\")[0];\n                    b.parentNode.insertBefore(a, b)\n                }\n            })();\n          ")
    }
  });
}