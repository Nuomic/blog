export const showDemoMsg = (state, msg) => {
  return {
    ...state,
    msg
  };
};

export const initPageOptions = (state, pageOptions) => {
  console.log('更新pageOptions', pageOptions);
  return {
    ...state,
    pageOptions
  };
};

export const updatePageId = (state, pageId) => {
  return {
    ...state,
    pageId
  };
};

export const updateUserInfo = (state, userInfo) => {
  return {
    ...state,
    userInfo
  };
};

export const updateLineList = (state, lineList) => {
  return {
    ...state,
    lineList
  };
};

export const updateHeader = (state, headerSetting) => {
  let newHeaderSetting = { ...state.headerSetting, ...headerSetting };
  /*if (state.headerSetting && headerSetting.rightBtn) {
      let newRightBtn = {...state.headerSetting.rightBtn, ...headerSetting.rightBtn}
      newHeaderSetting.rightBtn = newRightBtn
  } else {
      newHeaderSetting.rightBtn = null
  }*/

  return {
    ...state,
    headerSetting: newHeaderSetting
  };
};

export const updateLoading = (state, showLoading) => {
  let pageSetting = { ...(state.pageSetting || {}) };
  pageSetting.showLoading = showLoading || false;

  return {
    ...state,
    pageSetting: pageSetting
  };
};

export const updateErrorInfo = (state, commonErrorInfo) => {
  return {
    ...state,
    commonErrorInfo
  };
};

export const updateToast = (state, content) => {
  let pageSetting = { ...(state.pageSetting || {}) };
  pageSetting.toastMessage = content;
  return {
    ...state,
    pageSetting: pageSetting
  };
};

export const updateConfirm = (state, opt) => {
  let pageSetting = { ...(state.pageSetting || {}) };
  pageSetting.confirm = opt;
  return {
    ...state,
    pageSetting: pageSetting
  };
};

export const updateBtnLoading = (state, { index, val }) => {
  let { btnLoading = [] } = state;
  btnLoading[index] = val;
  return {
    ...state,
    btnLoading
  };
};

export const updateReqTime = (state, reqTime) => {
  return {
    ...state,
    reqTime
  };
};
export const updateCalendarData = (state, calendarData) => {
  return {
    ...state,
    calendarData
  };
};

/**
 * 全局给state对象添加属性*/
export const updateMergeState = (state, obj) => {
  return {
    ...state,
    ...obj
  };
};
