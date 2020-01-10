import { Router } from 'express'

const router = Router();
export default router

router.use(async (req, res, next) => {
  try {
    let xForwardedForIp = req.headers['X-Forwarded-For'] || '';
    xForwardedForIp = xForwardedForIp.split(',');
    let ip = xForwardedForIp[xForwardedForIp.length - 1] || req.headers['X-Forwarded-For'] || req.headers['x-real-ip'] || req.ip;
    res.type('application/json');
    res.json({ ip })
  } catch (error) {
    next(error)
  }
});
