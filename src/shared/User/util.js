import querystring from 'querystring';

export function getUserAgentByContext(context) {
  if (context.isServer) {
    return context.req.headers['user-agent'];
  } else if (context.isClient) {
    return navigator.userAgent;
  }
}

export function getCookieOriginByContext(context) {
  if (context.isServer) {
    return `http://${context.req.headers.host}`;
  } else if (context.isClient) {
    return `${window.location.protocol}//${window.location.host}`;
  }
}

export function getStorageItem(key) {
  return window.localStorage.getItem(key);
}

export function setStorageItem(key, value) {
  let finalValue = {
    tag: '',
    value: value,
    timeout: getNextMonthDate(),
    savedate: getCurrentDate()
  };
  window.localStorage.setItem(key, JSON.stringify(finalValue));
}

export function removeStorageItem(key) {
  window.localStorage.removeItem(key);
}

let pad = num => ('0' + num).slice(-2);

export function formatDate(date) {
  let year = date.getFullYear();
  let month = pad(date.getMonth() + 1);
  let day = pad(date.getDate());
  let hours = pad(date.getHours());
  let minutes = pad(date.getMinutes());
  let seconds = pad(date.getSeconds());
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

export function getCurrentDate() {
  return formatDate(new Date());
}

export function getNextMonthDate() {
  return formatDate(new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000));
}

export function getUrl(context) {
  if (context.isServer) {
    let req = context.req;
    let host = req.hostname || req.host;
    let protocol =
      Number(req.headers['x-ctrip-isssl']) === 1 ? 'https:' : 'http:';
    let url = `${protocol}//${host + req.originalUrl}?${querystring.stringify(
      req.query
    )}`;
    return url;
  } else {
    return window.location.href;
  }
}

export function redirect(context, targetUrl) {
  if (context.isServer) {
    context.res.redirect(targetUrl);
  } else {
    window.location.href = targetUrl;
  }
}

export function isOffline(context, location) {
  let { query } = context.isClient ? location : context.req;
  //query参数全部转为小写
  let { logintype } = JSON.parse(JSON.stringify(query || '').toLowerCase());
  return logintype == 'offline' || context.defaultNetType == 'offline';
}
