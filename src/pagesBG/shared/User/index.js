import querystring from 'querystring';
import { getCookieOriginByContext, getUrl, redirect } from './util';

// 登录地址
const loginUrlMap = {
  fat: `https://passport.fat466.qa.nt.ctripcorp.com/user/login`,
  uat: `https://passport.ctrip.uat.qa.nt.ctripcorp.com/user/login`,
  prod: `https://passport.ctrip.com/user/login`
};

// ServerDomainMap
const ServerDomainMap = {
  fat: 'http://gateway.m.fws.qa.nt.ctripcorp.com',
  uat: 'http://gateway.m.uat.qa.nt.ctripcorp.com',
  prod: 'http://apigateway.ctripcorp.com'
};

// ClientDomainMap
const ClientDomainMap = {
  fat: '//online.ctrip.fws.qa.nt.ctripcorp.com',
  uat: '//online.ctrip.uat.qa.nt.ctripcorp.com',
  prod: '//online.ctrip.com'
};

export default class User {
  constructor(context) {
    this.context = context;
  }
  fetch(...args) {
    return fetch(...args);
  }
  async getUserInfo(url) {
    let { context } = this;

    if (context.hasOwnProperty('userInfo')) {
      return context.userInfo;
    }

    if (!url) {
      let domain = '';
      if (context.isServer) {
        domain = ServerDomainMap[context.env];
      } else {
        domain = ClientDomainMap[context.env];
      }
      url = `${domain}/restapi/soa2/12446/GetUserInfo.json`;
    }

    let postData = {
      RequestType: [1, 2]
    };
    let options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        cookieorigin: getCookieOriginByContext(context)
      },
      body: JSON.stringify(postData)
    };

    if (context.isServer) {
      options.headers.cookie = context.req.headers.cookie;
    }

    try {
      let response = await this.fetch(url, options);
      let result = await response.json();
      let data = result.Data || {};
      let { UserInfo, ...others } = data;
      let userInfo = {
        ...others,
        ...data.UserInfo
      };
      return (context.userInfo = userInfo);
    } catch (error) {
      console.error('getUserInfo', error);
      return null;
    }
  }
  login() {
    let { context } = this;
    let loginUrl = loginUrlMap[context.env];
    let query = { backurl: getUrl(context) };
    let targetUrl = `${loginUrl}?${querystring.stringify(query)}`;

    redirect(context, targetUrl);
  }
  isLogin() {
    let { userInfo } = this.context;
    return !!(userInfo && userInfo.IsLogin);
  }
}
