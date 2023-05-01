const carsService = require('../../../services/carsService')
const usersService = require('../../../services/usersService')

module.exports = {
    list (req, res) {
        carsService
            .list()
            .then(({ data, count }) => {
                res.status(200).json({
                    status: 'SUCCESS',
                    cars: data,
                    meta: { total: count }
                })
            })
            .catch((err) => {
                res.status(400).json({
                    status: 'FAILED',
                    message: err.message
                })
            })
    },
    async add (req, res) {
        const { name, type, size, rentPerDay } = req.body
        const refreshToken = req.cookies.refreshToken
        if (refreshToken === null || refreshToken === undefined) {
            return res.status(401).json({
                status: 'FAILED',
                message: 'Silahkan Login'
            })
        }

        const user = await usersService.findRefreshToken(refreshToken)
        if (!user[0]) {
            return res.status(403).json({
                status: 'FAILED',
                message: 'Sesi Login telah expired, silahkan login ulang'
            })
        }

        const { id, role } = user[0]
        if (!name || !type || !size || !rentPerDay) {
            res.status(400).json({
                status: 'FAILED',
                message: 'Lengkapi atribut mobil'
            })
        } else if (typeof (rentPerDay) !== 'number') {
            res.status(400).json({
                status: 'FAILED',
                message: 'Nilai Rent Per Day harus angka'
            })
        } else if (role !== 'admin' && role !== 'superadmin') {
            res.status(401).json({
                status: 'FAILED',
                message: 'Hanya akun dengan role admin dan superadmin yang bisa menambah data mobil'
            })
        } else {
            carsService.add({ name, type, size, rentPerDay, owner: id, lastEditedBy: id, isDeleted: false })
                .then((car) => {
                    res.status(201).json({
                        status: 'SUCCESS',
                        car: {
                            name,
                            type,
                            size,
                            rentPerDay
                        }
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
