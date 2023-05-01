const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null || token === undefined) {
        return res.status(401).json({
            message: 'Silahkan Login'
        })
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                message: 'Sesi Login telah expired, silahkan login ulang'
            })
        }
        req.email = decoded.email
        next()
    })
}

module.exports = verifyToken
