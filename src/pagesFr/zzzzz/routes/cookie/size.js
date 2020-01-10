const cookie = require('cookie')
/**
 * 防止请求里的 cookie size 过大
 * 根据输入的最大值，将白名单以外的 cookie key 从大到小依次删除
 * 直到 headers.cookie 总体积小于目标值
 */
const defaultWhiteList = [
  'cticket',
  'ticket_ctrip',
  'offlineTicket',
  '_bfa',
  '_bfi',
  '_bfs',
  '_ga',
  'GUID'
]
const defaultOptions = {
  maxSize: 5 * 1024,
  whiteList: []
}

module.exports = options => (req, res, next) => {
  let { maxSize, whiteList } = { ...defaultOptions, ...options }
  let headers = req.headers
  let currentCookie = headers.cookie || ''
  let currentSize = currentCookie.length

  if (currentSize <= maxSize) {
    next()
    return
  }

  let cookies = req.cookies ? { ...req.cookies } : cookie.parse(currentCookie)
  whiteList = [...defaultWhiteList, ...whiteList]

  let keys = Object.keys(cookies).filter(key => !whiteList.includes(key))
  let sizes = keys.map(key => ({
    key,
    size: key.length + cookies[key].length + 2
  }))
  let sortedKeys = sizes.sort((a, b) => b.size - a.size)

  while (sortedKeys.length) {
    let { key, size } = sortedKeys.shift()

    delete cookies[key]
    currentSize -= size

    if (currentSize <= maxSize) {
      break
    }
  }

  headers.cookie = Object.keys(cookies)
    .map(key => (cookies[key] ? `${key}=${cookies[key]};` : null))
    .filter(Boolean)
    .join('')

  next()
}
