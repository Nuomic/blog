import Cookies from 'js-cookie'

/**
 * 防止请求里的 cookie size 过大
 * 根据输入的最大值，将白名单以外的 cookie key 从大到小依次删除
 * 直到 document.cookie 总体积小于目标值
 */
const defaultWhiteList = [
  'cticket',
  'ticket_ctrip',
  'offlineTicket',
  '_bfa',
  '_bfi',
  '_bfs',
  '_ga'
]
const defaultOptions = {
  maxSize: 5 * 1024,
  whiteList: [],
  domain: '.ctrip.com'
}
function checkCookieSize(options) {
  let { maxSize, whiteList, ...cookieOptions } = {
    ...defaultOptions,
    ...options
  }

  if (typeof window === 'undefined') return
  if (document.cookie.length <= maxSize) return

  whiteList = [...defaultWhiteList, ...whiteList]

  let cookie = Cookies.get()
  let keys = Object.keys(cookie).filter(key => !whiteList.includes(key))
  let sizes = keys.map(key => ({ key, size: cookie[key].length }))
  let sortedKeys = sizes.sort((a, b) => b.size - a.size).map(item => item.key)

  while (sortedKeys.length) {
    let key = sortedKeys.shift()
    Cookies.remove(key, cookieOptions)

    if (document.cookie.length <= maxSize) {
      return
    }
  }
}

export default checkCookieSize
