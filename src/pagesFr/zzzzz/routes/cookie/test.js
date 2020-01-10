const express = require('express')
const app = express()
const cookie = require('cookie')

const cookieSize = require('./size')

app.use(cookieSize({ maxSize: 300 }))
app.use((req, res, next) => {
  res.send(`
    <pre>${JSON.stringify(cookie.parse(req.headers.cookie), null, 2)}</pre>
  `)
})

app.listen(3000, () => console.log('server start at 3000'))
