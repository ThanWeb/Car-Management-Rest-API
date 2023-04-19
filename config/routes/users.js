const express = require('express')
const router = express.Router()

router.post('/register', (req, res, next) => {
    res.json({
        status: 201,
        message: 'Register'
    })
})

router.post('/admin/login', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Login Admin'
    })
})

router.post('/superadmin/login', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Login Super Admin'
    })
})

router.post('/member/login', (req, res, next) => {
    res.json({
        status: 200,
        message: 'Login Member'
    })
})

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
