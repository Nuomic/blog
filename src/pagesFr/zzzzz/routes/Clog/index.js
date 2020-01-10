/**
 * 用 cat 记录 node server 的运行状况
 */
import CtripUtil from "ctriputil";
// 引入 express router
import { Router } from 'express'
// 创建 router
const router = Router()


// 输出一个函数，该函数可以拿到 expres app 和 http server 两个参数
export default function (app, server) {
    app.use('/localapi', router) // 将 router 挂载到 express app 里
    server.on('error', (error) => { // 对 server 进行一些处理
        console.log('error', error)
    })
}


/**
 * 前端记CLog方法
 * 前端调用
 * this.postApi('/localapi/createClog',{type,title,message,addInfo},{raw:true})*/
router.post('/createClog',function (req, res) {

    const {body:{type,title,message,addInfo}}= req
    CtripUtil.clogging.custom({
        type,
        title,
        message,
        addInfo
    });

    res.json({  //服务端解析成JSON后响应
        error: req.body,
    })
})


