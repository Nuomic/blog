# react-imvc-starter

携程 react-imvc 项目模板

项目模板包含：

- 提供 Ctrip 登陆相关的模块，支持 PC，H5 和 Native 三种登陆模式，自动判断环境
- 自动判断是否在 Ctrip App 里面，按需添加 Ctrip App Bridge.js
- 根据配置，自动判断 H5 和 PC 环境，添加不同的 UBT 统计脚本。
- 自动判断是否在微信里面，按需添加微信 sdk 和封装的脚本
- 提供 tars 相关的项目配置
- 提供 cat 相关的配置，依赖[ctriputil](http://npm.release.ctripcorp.com/package/ctriputil) 模块相关的配置

项目的线上运行地址：http://m.ctrip.fat67.qa.nt.ctripcorp.com/react-imvc/examples

## 使用方式

- Fork 本项目的内容到自己的项目里
- 修改 app.config.js 里的 AppID 配置为自己申请的 AppID
- 修改 scripts/startup.sh 里 pm2 启动的 --name 参数为自己的项目名
- 按需修改 imvc.config.js 里的配置

输入以下命令，从携程 cnpm 镜像里下载模块依赖

```shell
npm install --registry=http://registry.npm.release.ctripcorp.com
# 或通过 npm scripts 下载依赖
npm run ctrip:install
```

输入以下命令，启动后，打开浏览器，访问 localhost:3000 查看页面。

```shell
npm start
```

## [react-imvc 文档](https://github.com/Lucifier129/react-imvc)

## [ctrip-bridge-standalone](http://git.dev.sh.ctripcorp.com/yj_gu/ctrip-bridge-standalone)

可以从上面链接入口里获取 bridge.js 的改造的独立版本的最新版，欢迎提 issue 和 pull request。

## BaseController 里的通用 API

### requireLogin 属性

当 `requireLogin` 属性为 `true` 时，如果用户未登陆，将重定向到登录页面

### requireUserInfo 属性

当 `requireUserInfo` 属性为 `true` 时，会自动 `getUserInfo` 获取用户信息，并出现在 `state.userInfo` 字段里。

该属性不会引起重定向，也不保证用户是登陆状态。

### pageId 属性

`pageid` 属性，如果有值，会自动在 `componentDidFirstMount` 生命周期里发送出去。

### callNative： 调用 Ctrip App Bridge 方法

在 `src/shared/BaseController.js` 内置了一个 `callNative` 方法，可以通过该方法调用 native 提供的接口。

callNative 方法接受一个 options 参数，支持的方法参考 [bridge 文档](http://crn.site.ctripcorp.com/hapi/)

- options.type 为模块类型，如 CtripUtil CtripUser CtripTool 等
- options.method 为模块方法，如 CtripUtil 里的 open_url 等
- options.args 为需要传递给 bridge 的参数，必须是数组形式
- option.timeout 为超时时间，默认为 2 秒

```javascript
import Controller from 'path/to/BaseController';

export default class extends Controller {
  // 基于 callNative 实现 base64 encode
  async base64Encode(inputString) {
    let options = {
      type: 'CtripEncrypt', // 模块名
      method: 'base64_encode', // 方法名
      args: [inputString] // 数组形式
    };
    let outputString = await this.callNative(options); // callNative 返回 promise，可以使用 async/await 语法获取返回值
    return outputString;
  }
}
```

### isInWeixin: 判断是否在微信里面

`isInWeixin` 方法，当是在微信浏览器里打开页面时返回 `true`，其余情况返回 `false`

### isInCtripApp：判断是否在携程主 app 里面

`isInCtripApp` 方法，当是在携程主 app 里打开页面时返回 `true`，其余情况返回 `false`。

### initWeixinShare：调用微信分享接口

`BaseController.js` 提供了 `initWeixinSahre(options)` 的接口

```javascript
/**
 * 微信分享接口
 * @param {Object}          options
 * @param {String}          options.title         标题
 * @param {String}          options.desc          描述
 * @param {String}          options.href          链接地址
 * @param {String}         [options.icon   ]      分享图标
 * @param {String}         [options.type   ]      分享类型
 * @param {String}         [options.src    ]      分享资源地址
 */
this.initWeixinShare({
  title: '测试',
  desc: '描述',
  href: location.href,
  icon: 'https://dimg04.c-ctrip.com/images/300u0g0000007qifs2869.jpg'
});
```

在调用 `initWeixinShare` 方法之后，controller 将得到两个生命周期方法

- `weixinDidShare`，在用户成功分享链接出去后触发
- `weixinDidCancelShare`，在用户唤起分享控件，却取消分享行为时触发

提醒：微信自定义分享功能只在生产环境生效

### logpv:记录页面 page view（PV）

`logpv` 方法，将 `controller.pageId` 属性作为 `pageId`，发送 pv 请求。

### tracelog(key, value, callback): 记录埋点

`tracelog` 方法，发送埋点请求

- key: 埋点的 key
- value: 埋点的 value
- callback: 埋点的 callback

## getUserAgent: 获取用户代理字符串

`getUserAgent` 方法，可以在浏览器端和服务端都获取到一致的 `userAgent` 字符串。

## ctriputil

ctriputil 为携程 [cnpm](http://npm.release.ctripcorp.com/) 私有模块，可以通过以下命令安装

```shell
npm install --save ctriputil --registry=http://npm.dev.sh.ctripcorp.com:8001
```

从 [cat](http://cat.ctripcorp.com/cat/r) 网站里，用 AppId 搜索，来查看 node server 的运行情况
