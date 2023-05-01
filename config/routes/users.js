const express = require('express')
const router = express.Router()

// const verifyToken = require('../../app/middlewares/verifyToken')
const controllers = require('../../app/controllers')

router.post('/register', controllers.api.users.register)
router.post('/login', controllers.api.users.login)
router.get('/token', controllers.api.users.refreshToken)

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

router.post('/logout', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Delete'
    })
})

module.exports = router
