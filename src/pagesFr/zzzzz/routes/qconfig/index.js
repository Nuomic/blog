// import config from './config'
import config from './config-v2'

export default function (app) {
  app.use('/qconfig', config)
}
