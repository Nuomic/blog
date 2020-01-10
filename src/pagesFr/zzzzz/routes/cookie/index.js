import cookieSize from './size'

export default function(app) {
  app.use(cookieSize({ maxSize: 5 * 1024 }))
}
