const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersService = require('../../../services/usersService')
const validateEmail = require('../../../middlewares/validateEmail')

module.exports = {
    async register (req, res) {
        const { email, password, confirmPassword } = req.body

        if (!email || !password || !confirmPassword) {
            res.status(400).json({
                status: 'FAILED',
                message: 'Lengkapi Email, Password dan Konfirmasi password'
            })
        } else if (!validateEmail(email)) {
            res.status(400).json({
                status: 'FAILED',
                message: 'Email tidak valid'
            })
        } else if (await usersService.findEmail(email)) {
            res.status(400).json({
                status: 'FAILED',
                message: 'Email sudah terdaftar'
            })
        } else if (password !== confirmPassword) {
            res.status(400).json({
                status: 'FAILED',
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
    },
    async login (req, res) {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({
                status: 'FAILED',
                message: 'Lengkapi Email dan Password'
            })
        } else {
            const user = await usersService.findEmail(email) || null

            if (user) {
                const match = await bcryptjs.compare(password, user.password)

                if (!match) {
                    res.status(400).json({
                        status: 'FAILED',
                        message: 'Password salah'
                    })
                } else {
                    const { id } = user
                    const accessToken = jwt.sign({ id, email }, process.env.ACCESS_TOKEN_SECRET, {
                        expiresIn: '20s'
                    })
                    const refreshToken = jwt.sign({ id, email }, process.env.REFRESH_TOKEN_SECRET, {
                        expiresIn: '1d'
                    })

                    await usersService.updateToken({ id, refreshToken })
                    res.cookie('refreshToken', refreshToken, {
                        httpOnly: true,
                        maxAge: 24 * 60 * 60 * 1000
                    })

                    res.json({ accessToken })
                }
            } else {
                res.status(404).json({
                    status: 'FAILED',
                    message: 'Email belum terdaftar'
                })
            }
        }
    },
    async refreshToken (req, res) {
        try {
            console.log(req.cookies)
            const refreshToken = req.cookies.refreshToken
            if (refreshToken === null || refreshToken === undefined) {
                return res.status(401).json({
                    message: 'Silahkan Login'
                })
            }

            const user = await usersService.findRefreshToken(refreshToken)
            if (!user[0]) {
                return res.status(403).json({
                    message: 'Sesi Login telah expired, silahkan login ulang'
                })
            }

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(403).json({
                        message: 'Sesi Login telah expired, silahkan login ulang'
                    })
                }

                const { id, email } = user[0]
                const accessToken = jwt.sign({ id, email }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '20s'
                })
                res.json({ accessToken })
            })
        } catch (err) {
            console.log(err)
        }
    }
}
