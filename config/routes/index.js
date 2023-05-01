const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'SUCCESS',
        message: 'Welcome to Car Management Rest API'
    })
})

module.exports = router
