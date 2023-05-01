const express = require('express')
const router = express.Router()

// const verifyToken = require('../../app/middlewares/verifyToken')
const controllers = require('../../app/controllers')

router.post('/register', controllers.api.users.register)
router.post('/login', controllers.api.users.login)
router.get('/token', controllers.api.users.refreshToken)
router.delete('/logout', controllers.api.users.logout)
router.post('/register-admin', controllers.api.users.registerAdmin)
router.get('/profile', controllers.api.users.profile)

module.exports = router
