"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
var cookieWhiteList = ['cticket', 'ticket_ctrip', 'UserLoginSessionID', 'offlineTicket', '_bfa', '_bfi', '_bfs', '_ga'];

function getCookie(cookies) {
  return cookieWhiteList.map(function (key) {
    return cookies[key] ? "".concat(key, "=").concat(cookies[key], ";") : null;
  }).filter(Boolean).join('');
}