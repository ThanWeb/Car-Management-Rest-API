const express = require('express')
const router = express.Router()

const verifyToken = require('../../app/middlewares/verifyToken')
const controllers = require('../../app/controllers')

router.get('/', verifyToken, controllers.api.cars.list)

router.get('/:id', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Car Detail'
    })
})

router.post('/add', (req, res, next) => {
    res.json({
        status: 201,
        message: 'Add Car'
    })
})

router.post('/edit/:id', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Edit Car'
    })
})

router.post('/delete/:id', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Delete Car'
    })
})

module.exports = router
