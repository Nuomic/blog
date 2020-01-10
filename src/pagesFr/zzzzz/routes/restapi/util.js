const cookieWhiteList = [
  'cticket',
  'ticket_ctrip',
  'UserLoginSessionID',
  'offlineTicket',
  '_bfa',
  '_bfi',
  '_bfs',
  '_ga'
];

export function getCookie(cookies) {
  return cookieWhiteList
    .map(key => cookies[key] ? `${key}=${cookies[key]};` : null)
    .filter(Boolean)
    .join('')
}
