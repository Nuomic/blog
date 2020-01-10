import React from 'react'
import Script from 'react-imvc/component/Script'

export default function Page(props) {
	return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui"
				/>
				<meta content="yes" name="apple-mobile-web-app-capable" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta content="black" name="apple-mobile-web-app-status-bar-style" />
				<title>{props.title}</title>
				<meta name="description" content={props.description} />
				<meta name="keywords" content={props.keywords} />
			</head>
			<body>
				<div id="root" dangerouslySetInnerHTML={{ __html: props.content }} />
				<div id="modal" />
				<input type="hidden" id="page_id" value="wait" />
				<Script>
					{`
            (function() {
              window.__INITIAL_STATE__ = ${JSON.stringify(props.initialState)}
              window.__APP_SETTINGS__ = ${JSON.stringify(props.appSettings)}
              window.__PUBLIC_PATH__ = '${props.publicPath}'
            })()
          `}
				</Script>
				<script src={`${props.publicPath}/${props.assets.vendor}`} />
				{props.ubt}
				{props.bridge}
				{props.weixinSdk}
				<script src={`${props.publicPath}/${props.assets.index}`} />
				<script src="//webresint.sh.ctriptravel.com/ares2/infosec/ifs/*/default/lab.min.js?expires=1s"></script>
			</body>
		</html>
	)
}
