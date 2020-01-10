import express from 'express'
import qconfig from '@ctrip/node-vampire-qconfig'

const router = express.Router();

export default router;

router.use('/:name', (req, res, next) => {
	const name = req.params.name
	const _qconfig = qconfig.getConfig(`${name}.json`)
	let datas = _qconfig.get().then((data) => {
		res.json(data)
		// console.log('QConfig Datas:', JSON.stringify(data))
	}).catch((err) => {
		console.log('QConfig Error:', err);
	});
})
