import attachUbt from './attachUbt'
import attachBridge from './attachBridge'
import attachWeixinSdk from './attachWeixinSdk'

export default function(app) {
	app.use(attachUbt, attachBridge, attachWeixinSdk)
}
