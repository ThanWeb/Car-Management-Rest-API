const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Welcome to Car Management Rest API'
    })
})

module.exports = router
