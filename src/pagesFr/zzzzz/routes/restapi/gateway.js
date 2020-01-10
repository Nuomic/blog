import { Router } from 'express'
import fetch from 'node-fetch'
import { getCookie } from './util'
import config from "../../imvc.config";

const router = Router()
export default router

const restapiMap = {
  fat: 'http://gateway.m.fws.qa.nt.ctripcorp.com/restapi/soa2',
  uat: 'http://gateway.m.uat.qa.nt.ctripcorp.com/restapi/soa2',
  prod: 'http://apigateway.ctripcorp.com/restapi/soa2'
}

const restapiBasename = restapiMap[config.env]
const host = restapiBasename.substr(7).split('/')[0]
/**
 * 将前端的请求转发给内网 restapi 接口，解决跨域和数据格式等问题
 * code 服务号，name，接口名
 * example:
 * 输入：/10258/GetUserCommunityInfo
 * 输出：http://gateway.m.fws.qa.nt.ctripcorp.com/restapi/soa2/10258/GetUserCommunityInfo
 */
router.use(async (req, res, next) => {
  let { params } = req
  let url = restapiBasename + req.url
  let options = {
    method: req.method,
    headers: {
      ...req.headers,
      host: host,
      cookie: getCookie(req.cookies)
    },
    body: /^post$/i.test(req.method) && req.body ? JSON.stringify(req.body) : null
  }

   /**
   * req.headers['content-length'] 可能不等于 JSON.stringify(req.body).length
   * 如果有 body，专门设置一下 content-length
   */
  if (options.body) {
    options.headers['content-length'] = Buffer.byteLength(options.body)
  }

  try {
    let response = await fetch(url, options)
    res.type('application/json')
    response.body.pipe(res)
  } catch (error) {
    next(error)
  }
})
