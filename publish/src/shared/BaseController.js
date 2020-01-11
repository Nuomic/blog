"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserController = _interopRequireDefault(require("./UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { getCookieOriginByContext } from './User/util'
// const MARKETING_API = {
//   fat: 'http://offline.fx.fws.qa.nt.ctripcorp.com/ttd',
//   uat: 'http://offline.fx.uat.qa.nt.ctripcorp.com/ttd',
//   prod: 'http://offline.fx.ctripcorp.com/ttd'
// };
var _default =
/*#__PURE__*/
function (_Controller) {
  _inherits(_default, _Controller);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "SSR", _this.location.query.ssr != 0);

    return _this;
  } // requireLogin = false // 是否需要登陆才能访问
  // requireUserInfo = false // 是否需要用户信息
  // pageId = 0 // 页面 pageid
  // /**
  //  * 动态获取初始化状态
  //  */
  // async getInitialState(initialState) {
  //   let { requireLogin, requireUserInfo } = this
  //   let userInfo
  //   if (requireLogin || requireUserInfo) {
  //     userInfo = await this.getUserInfo()
  //   }
  //   return {
  //     ...initialState,
  //     userInfo,
  //     locale: this.getCookie('ttd-shark-locale-lang') || 'zh-CN',//多语言默认中文
  //     language: (await this.callShark()) || {},
  //     isLogin: this.isLogin(),
  //     jumpUrlMap: this.context.jumpUrlMap
  //   }
  // }
  // /**
  //  * 服务端的 context 和客户端的 context 是两个对象
  //  * 服务端的生命周期里获取了自定义数据存入 context，不会在客户端集成
  //  * stateDidReuse 在客户端服用服务端 state 时触发
  //  * 可以在这个生命周期里将 state 里的数据按需存入 context，避免重复请求
  //  */
  // stateDidReuse(state) {
  //   let { context } = this
  //   // 如果 userInfo 不为 undefined 说明请求过了 user，不管结果是什么，都存入 context
  //   if (state.userInfo !== undefined) {
  //     context.userInfo = state.userInfo
  //   }
  // }
  // fetch(url, options) {
  //   let result = this.resolveFetchArgs(url, options);
  //   url = result.url;
  //   options = result.options;
  //   let headers = {
  //     ...result.options.headers,
  //     'x-req-src': createReqSrc({
  //       // for server-side
  //       req: this.context.req,
  //       appId: this.context.appId,
  //       h5Version: this.context.h5Version
  //     })
  //   }
  //   const { isClient, basename } = this.context;
  //   if (url.startsWith("/shark") || url.startsWith("/shield")) {
  //     url = basename + url;
  //     options = { ...options, raw: true };
  //   } else if (url.startsWith("/restapi")) {
  //     url = basename + url;
  //     options = {
  //       method: "POST",
  //       ...options,
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         ...headers,
  //       },
  //       credentials: "include",
  //       raw: true,
  //     }
  //   }
  //   return super.fetch(url, { ...options, headers })
  // }
  // // 设置 data 默认值为 {}，这样 resolveFeatchArgs 可以补充 head
  // post(url, data = {}, options) {
  //   return super.post(url, data, options)
  // }
  // /**
  //  * 处理 ctrip gateway 需要的跨域 header 参数 cookirorigin
  //  * 处理 ctirp gateway post 请求需要的 head 参数
  //  */
  // resolveFetchArgs(url, options) {
  //   // 支持框架原有的 url shortcut 写法
  //   if (this.API && this.API.hasOwnProperty(url)) {
  //     url = this.API[url]
  //   }
  //   let context = this.context
  //   // 构造 cookieorigin
  //   options.headers = {
  //     ...options.headers,
  //     cookieorigin: getCookieOriginByContext(context)
  //   }
  //   let postData =
  //     options.body && typeof options.body === 'string'
  //       ? JSON.parse(options.body)
  //       : null
  //   /**
  //    * post 请求，构造一个 head 参数
  //    */
  //   if (postData) {
  //     // url 追加古怪参数 _fxpcqlniredt
  //     let cid = this.cookie('GUID')
  //     if (cid) {
  //       let prefix = url.includes('?') ? '&' : '?'
  //       url += prefix + `_fxpcqlniredt=${cid}`
  //     }
  //     let shareData = {
  //       contentType: 'json',
  //       head: {
  //         cid: cid,
  //         ctok: '',
  //         cver: '1.0',
  //         lang: '01',
  //         sid: '8888',
  //         syscode: '09',
  //         auth: '',
  //         extension: []
  //       }
  //     }
  //     if (context.userInfo && context.userInfo.Auth) {
  //       shareData.head.auth = context.userInfo.Auth
  //     }
  //     options.body = JSON.stringify(Object.assign(shareData, postData))
  //   }
  //   return { url, options }
  // }
  // /**
  //  * 如果 requireLogin 为 true，isLogin 为 false，则去登陆
  //  *
  //  */
  // shouldComponentCreate() {
  //   if (this.requireLogin && !this.isLogin()) {
  //     this.login()
  //     return false
  //   }
  // }
  // /**
  //  * 在页面第一次 mount 时记录 pv
  //  */
  // async componentDidFirstMount() {
  //   this.syncClientId()
  //   this.logpv();
  //   try {
  //     const {language} = this.store.getState();
  //     language.title && (document.title = language.title);
  //   } catch (error) {
  //   }
  // }
  // /**
  //  * 封装调用 ctrip app bridge 的方法
  //  * options 是一个对象
  //  * options.type 对应 CtripUtil, CtripUser 等模块类型
  //  * options.method 对应 CtripUtil open_url 等方法命
  //  * options.args 需要传递的参数列表
  //  * options.timeout 超时时间
  //  */
  // callNative = options => {
  //   if (typeof dispatchNative !== 'undefined') {
  //     return dispatchNative(options)
  //   } else {
  //     return Promise.reject(
  //       new Error('当前环境不支持调用 Ctrip App Bridge 方法')
  //     )
  //   }
  // }
  // /**
  //  * 页面 pageid 记录
  //  */
  // logpv() {
  //   let { pageId } = this
  //   if (!this.context.isClient || !pageId) {
  //     return null
  //   }
  //   window['__bfi'] = window['__bfi'] || []
  //   window['__bfi'].push([
  //     '_asynRefresh',
  //     {
  //       page_id: pageId,
  //       url: window.location.href,
  //       orderid: '',
  //       refer: window.document.referrer
  //     }
  //   ])
  // }
  // /**
  //  * 页面埋点记录
  //  */
  // tracelog(key, value, callback) {
  //   if (!this.context.isClient) {
  //     return
  //   }
  //   value = value ? JSON.stringify(value) : ''
  //   window['__bfi'] = window['__bfi'] || []
  //   window['__bfi'].push(['_tracklog', key, value, callback])
  // }
  // /**
  //  * 获取用户代理字符串
  //  */
  // getUserAgent() {
  //   if (this.context.isServer) {
  //     return this.context.req.headers['user-agent']
  //   } else {
  //     return window.navigator.userAgent
  //   }
  // }
  // /**
  //  * 是否在微信里
  //  */
  // isInWeixin() {
  //   return /MicroMessenger/i.test(this.getUserAgent())
  // }
  // /**
  //  * 是否在携程 app 里
  //  */
  // isInCtripApp() {
  //   return /ctripwireless/i.test(this.getUserAgent())
  // }
  // /**
  //  * 微信分享接口
  //  * @param {Object}          options
  //  * @param {String}          options.title         标题
  //  * @param {String}          options.desc          描述
  //  * @param {String}          options.href          链接地址
  //  * @param {String}         [options.icon   ]      分享图标
  //  * @param {String}         [options.type   ]      分享类型
  //  * @param {String}         [options.src    ]      分享资源地址
  //  * @param {Function}       success               分享成功后的回调
  //  * @param {Function}       cancel               分享取消后的回调
  //  */
  // async initWeixinShare(options, success, cancel) {
  //   if (typeof __ctrip_weixin__ === 'undefined') {
  //     return false
  //   }
  //   let handleSuccess = () => {
  //     if (this.weixinDidShare) {
  //       this.weixinDidShare(options)
  //     }
  //     if (success) {
  //       success(options)
  //     }
  //   }
  //   let handleCancel = () => {
  //     if (this.weixinDidCancelShare) {
  //       this.weixinDidCancelShare(options)
  //     }
  //     if (cancel) {
  //       cancel(options)
  //     }
  //   }
  //   await __ctrip_weixin__.share(options, handleSuccess, handleCancel)
  //   return true
  // }
  // //获得新的clientId
  // async syncClientId() {
  //   if (this.context.isServer) return
  //   let ls = window.localStorage
  //   let cookieCid = this.cookie('GUID')
  //   let cid = ls.getItem('GUID')
  //   let list = location.host.split('.')
  //   let cookieOptions = {
  //     expires: new Date(new Date().getTime() + 3 * 360 * 24 * 60 * 60 * 1000),
  //     path: '/'
  //   }
  //   if (list.length > 2) {
  //     cookieOptions.domain = '.' + list.slice(-2).join('.')
  //   }
  //   // 处理在携程 app 的情况，通过 bridge 拿到设备ID，存入 cookie 和 storage
  //   if (this.isInCtripApp()) {
  //     return CtripUtil.app_init_member_H5_info(params => {
  //       if (cookieCid === params.clientID && cid === params.clientID) {
  //         return
  //       }
  //       ls.setItem('GUID', params.clientID)
  //       this.cookie('GUID', params.clientID, cookieOptions)
  //     })
  //   }
  //   //如果cid不存在或者是老的cid格式,发起查询服务
  //   if (!cookieCid && (!cid || cid.indexOf('-') > -1)) {
  //     let params = {}
  //     //如果CID存在,此时应为一个老格式,做一个备份
  //     if (cid) {
  //       ls.setItem('BGUID', cid)
  //       params.PreviousID = cid
  //     }
  //     let api = '/10290/createclientid'
  //     let query = {
  //       systemcode: '09',
  //       createtype: 3,
  //       contentType: 'json'
  //     }
  //     let data = await this.get(api, query)
  //     if (data && data.ClientID) {
  //       ls.setItem('GUID', data.ClientID)
  //       this.cookie('GUID', data.ClientID, cookieOptions)
  //     }
  //   } else {
  //     if (!cookieCid) {
  //       //cookie中没有，但是localStorage中有，须写入cookie中,，默认存储三年时间
  //       this.cookie('GUID', cid, cookieOptions)
  //     }
  //   }
  // }


  return _default;
}(_UserController["default"]);

exports["default"] = _default;