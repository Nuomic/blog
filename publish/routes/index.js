"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serverBg = require("./server-bg");

Object.keys(_serverBg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _serverBg[key];
    }
  });
});

var _serverFr = require("./server-fr");

Object.keys(_serverFr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _serverFr[key];
    }
  });
});