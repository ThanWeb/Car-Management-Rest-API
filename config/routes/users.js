const express = require('express')
const router = express.Router()

// const verifyToken = require('../../app/middlewares/verifyToken')
const controllers = require('../../app/controllers')

router.post('/register', controllers.api.users.register)
router.post('/login', controllers.api.users.login)
router.get('/token', controllers.api.users.refreshToken)
router.delete('/logout', controllers.api.users.logout)

// router.post('/admin/login', (req, res, next) => {
//     res.json({
//         status: 200,
//         message: 'Login Admin'
//     })
// })

// router.post('/superadmin/login', (req, res, next) => {
//     res.json({
//         status: 200,
//         message: 'Login Super Admin'
//     })
// })

// router.post('/member/login', (req, res, next) => {
//     res.json({
//         status: 200,
//         message: 'Login Member'
//     })
// })

router.post('/add/admin', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Add Admin'
    })
})

router.get('/profile', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Profile'
    })
})

module.exports = router
