"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMergeState = exports.updateCalendarData = exports.updateReqTime = exports.updateBtnLoading = exports.updateConfirm = exports.updateToast = exports.updateErrorInfo = exports.updateLoading = exports.updateHeader = exports.updateLineList = exports.updateUserInfo = exports.updatePageId = exports.initPageOptions = exports.showDemoMsg = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var showDemoMsg = function showDemoMsg(state, msg) {
  return _objectSpread({}, state, {
    msg: msg
  });
};

exports.showDemoMsg = showDemoMsg;

var initPageOptions = function initPageOptions(state, pageOptions) {
  console.log('更新pageOptions', pageOptions);
  return _objectSpread({}, state, {
    pageOptions: pageOptions
  });
};

exports.initPageOptions = initPageOptions;

var updatePageId = function updatePageId(state, pageId) {
  return _objectSpread({}, state, {
    pageId: pageId
  });
};

exports.updatePageId = updatePageId;

var updateUserInfo = function updateUserInfo(state, userInfo) {
  return _objectSpread({}, state, {
    userInfo: userInfo
  });
};

exports.updateUserInfo = updateUserInfo;

var updateLineList = function updateLineList(state, lineList) {
  return _objectSpread({}, state, {
    lineList: lineList
  });
};

exports.updateLineList = updateLineList;

var updateHeader = function updateHeader(state, headerSetting) {
  var newHeaderSetting = _objectSpread({}, state.headerSetting, {}, headerSetting);
  /*if (state.headerSetting && headerSetting.rightBtn) {
      let newRightBtn = {...state.headerSetting.rightBtn, ...headerSetting.rightBtn}
      newHeaderSetting.rightBtn = newRightBtn
  } else {
      newHeaderSetting.rightBtn = null
  }*/


  return _objectSpread({}, state, {
    headerSetting: newHeaderSetting
  });
};

exports.updateHeader = updateHeader;

var updateLoading = function updateLoading(state, showLoading) {
  var pageSetting = _objectSpread({}, state.pageSetting || {});

  pageSetting.showLoading = showLoading || false;
  return _objectSpread({}, state, {
    pageSetting: pageSetting
  });
};

exports.updateLoading = updateLoading;

var updateErrorInfo = function updateErrorInfo(state, commonErrorInfo) {
  return _objectSpread({}, state, {
    commonErrorInfo: commonErrorInfo
  });
};

exports.updateErrorInfo = updateErrorInfo;

var updateToast = function updateToast(state, content) {
  var pageSetting = _objectSpread({}, state.pageSetting || {});

  pageSetting.toastMessage = content;
  return _objectSpread({}, state, {
    pageSetting: pageSetting
  });
};

exports.updateToast = updateToast;

var updateConfirm = function updateConfirm(state, opt) {
  var pageSetting = _objectSpread({}, state.pageSetting || {});

  pageSetting.confirm = opt;
  return _objectSpread({}, state, {
    pageSetting: pageSetting
  });
};

exports.updateConfirm = updateConfirm;

var updateBtnLoading = function updateBtnLoading(state, _ref) {
  var index = _ref.index,
      val = _ref.val;
  var _state$btnLoading = state.btnLoading,
      btnLoading = _state$btnLoading === void 0 ? [] : _state$btnLoading;
  btnLoading[index] = val;
  return _objectSpread({}, state, {
    btnLoading: btnLoading
  });
};

exports.updateBtnLoading = updateBtnLoading;

var updateReqTime = function updateReqTime(state, reqTime) {
  return _objectSpread({}, state, {
    reqTime: reqTime
  });
};

exports.updateReqTime = updateReqTime;

var updateCalendarData = function updateCalendarData(state, calendarData) {
  return _objectSpread({}, state, {
    calendarData: calendarData
  });
};
/**
 * 全局给state对象添加属性*/


exports.updateCalendarData = updateCalendarData;

var updateMergeState = function updateMergeState(state, obj) {
  return _objectSpread({}, state, {}, obj);
};

exports.updateMergeState = updateMergeState;