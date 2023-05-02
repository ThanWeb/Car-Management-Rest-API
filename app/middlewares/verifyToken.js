const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshToken
    if (refreshToken === null || refreshToken === undefined) {
        return res.status(401).json({
            status: 'FAILED',
            message: 'Silahkan login'
        })
    }

    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null || token === undefined) {
        return res.status(401).json({
            status: 'FAILED',
            message: 'Token invalid'
        })
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                status: 'FAILED',
                message: 'Sesi login telah expired, silahkan login ulang'
            })
        }
        req.email = decoded.email
        next()
    })
}

module.exports = verifyToken
