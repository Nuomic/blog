import { Router } from 'express'
import querystring from 'querystring'
import config from '../../imvc.config'
import { getCookie } from './util'

const router = Router();
export default router

const restapiMap = {
  fat: 'http://webapi.soa.fws.qa.nt.ctripcorp.com',
  uat: 'http://webapi.soa.uat.qa.nt.ctripcorp.com',
  prod: 'http://webapi.soa.ctripcorp.com'
};

const restapiBasename = restapiMap[config.env];
const host = restapiBasename.substr(7);
/**
 * 将前端的请求转发给内网 restapi 接口，解决跨域和数据格式等问题
 * code 服务号，name，接口名
 * example:
 * 输入：/10124/GetAdvisorEvent
 * 输出：http://webapi.soa.fws.qa.nt.ctripcorp.com/api/11679/json/GetAdvisorEvent
 */
router.use('/:code/:name', async (req, res, next) => {

  let { params, headers } = req;
  let reqHost = headers.origin || headers.host || '';

  let isOffline = reqHost.includes('.ctripcorp.com');
  let isLocalhost = ['127.0.0.1', 'localhost'].some(i => reqHost.includes(i));

  // soa只能内网域名请求,否则会有内网渗透的隐患,如果不是内网请求的则交给gateway处理
  // localhost是本地Fiddler代理或服务器内部请求，本地转发到soa不是公司内网也会访问不了webapi
  if (!isOffline && !isLocalhost) {
    next();
    return
  }

  let url = `${restapiBasename}/api/${params.code}/${params.name}?${querystring.stringify(req.query)}`;
  let options = {
    method: req.method,
    headers: {
      ...req.headers,
      host: host,
      cookie: getCookie(req.cookies)
    },
    body: req.body ? JSON.stringify(req.body) : null
  };

  // https://github.com/bitinn/node-fetch/blob/master/src/body.js
  // 删除content-length让node-fetch处理
  delete options.headers['content-length'];

  try {
    let response = await fetch(url, options);
    res.type('application/json');
    response.body.pipe(res)
  } catch (error) {
    next(error)
  }
});
