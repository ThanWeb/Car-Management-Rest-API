const bcryptjs = require('bcryptjs')
const usersService = require('../../../services/usersService')
const validateEmail = require('../../../middlewares/validateEmail')

module.exports = {
    async register (req, res) {
        const { email, password, confirmPassword } = req.body

        if (!email || !password || !confirmPassword) {
            res.status(400).json({
                status: 'BAD REQUEST',
                message: 'Lengkapi Email, Password dan Konfirmasi password'
            })
        } else if (!validateEmail(email)) {
            res.status(400).json({
                status: 'BAD REQUEST',
                message: 'Email tidak valid'
            })
        } else if (await usersService.findEmail(email)) {
            res.status(400).json({
                status: 'BAD REQUEST',
                message: 'Email sudah terdaftar'
            })
        } else if (password !== confirmPassword) {
            res.status(400).json({
                status: 'BAD REQUEST',
                message: 'Password dan Konfirmasi Password berbeda'
            })
        } else {
            const salt = await bcryptjs.genSalt()
            const hashPassword = await bcryptjs.hash(password, salt)
            usersService
                .create({ email, password: hashPassword, confirmPassword: hashPassword, role: 'member' })
                .then((account) => {
                    res.status(201).json({
                        status: 'SUCCESS',
                        data: account
                    })
                })
                .catch((err) => {
                    res.status(422).json({
                        status: 'FAILED',
                        message: err.message
                    })
                })
        }
    }
}
