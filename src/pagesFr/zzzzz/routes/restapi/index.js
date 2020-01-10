import { Router } from 'express'
import soa from './soa'
import gateway from './gateway'
import getip from './getip'

export default function (app) {
  app.use('/restapi/soa', soa, gateway);
  app.use('/restapi/gateway', gateway)
  app.use('/restapi/getIP', getip)
}
