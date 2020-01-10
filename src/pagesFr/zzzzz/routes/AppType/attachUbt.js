/**
 * 根据 APPType 和 req.host 动态判断环境，添加 ubt 脚本
 */
import React from "react";

export default function attachUbt(req, res, next) {
  let type = getType(res.locals.AppType, req.hostname);
  res.locals.ubt = getUbt(type);
  next();
}

function getType(AppType, host) {
  let type = AppType && AppType.default ? AppType.default : "pc";

  if (!AppType) {
    return type;
  }

  if (AppType.h5) {
    let isMatch = AppType.h5.find(item => item === host);
    if (isMatch) {
      type = "h5";
    }
  } else if (AppType.pc) {
    let isMatch = AppType.pc.find(item => item === host);
    if (isMatch) {
      type = "pc";
    }
  }

  return type;
}

function getUbt(type) {
  const scripts = {
    pc: "_bfa.min.js",
    h5: "_mubt.min.js"
  };
  const script = scripts[type];
  if (!script) {
    return null;
  }
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
            ; (function() {
                window.__bfi = window.__bfi || [];
                if (! (window.$_bf && window.$_bf.loaded || window.$LAB || window.CtripJsLoader)) {
                    var a = new Date,
                    b = !1,
                    c = "?v=" + a.getFullYear() + a.getMonth() + "_" + a.getDate(),
                    a = document.createElement("script");
                    a.type = "text/javascript";
                    a.charset = "utf-8";
                    a.async = !0;
                    try {
                        b = "https:" == location.protocol
                    } catch(d) {}
                    a.src = ((b ? "https:": "http:")) + "//webresource.c-ctrip.com/code/ubt/${script}" + c;
                    b = document.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                }
            })();
          `
      }}
    />
  );
}
