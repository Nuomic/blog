/**
 * 根据 userAgent 判断是否添加 微信 sdk 脚本
 */
import React from 'react'

export default function attachBridge(req, res, next) {
	let userAgent = req.headers['user-agent']
	let isWeixin = /MicroMessenger/i.test(userAgent) || req.query.__isWeixin
	if (isWeixin) {
		res.locals.weixinSdk = [
			getWeixinSdk(res.locals.publicPath),
			getCtripWeixin(res.locals.publicPath)
		]
	}
	next()
}

function getWeixinSdk(publicPath) {
	return (
		<script
			type="text/javascript"
			src="//res.wx.qq.com/open/js/jweixin-1.0.0.js"
			key="WeChatSDK"
		/>
	)
}

function getCtripWeixin(publicPath) {
	return (
		<script
			type="text/javascript"
			src={`${publicPath}/lib/weixin.js`}
			key="WeChat"
		/>
	)
}
