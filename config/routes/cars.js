const express = require('express')
const router = express.Router()

const verifyToken = require('../../app/middlewares/verifyToken')
const controllers = require('../../app/controllers')

router.get('/', controllers.api.cars.list)
router.post('/add', verifyToken, controllers.api.cars.add)
// router.put('/edit', verifyToken, controllers.api.cars.edit)
// router.get('/detail/:id', verifyToken, controllers.api.cars.detail)
// router.delete('/delete', verifyToken, controllers.api.cars.delete)

module.exports = router
