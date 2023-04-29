const carsService = require('../../../services/carsService')

module.exports = {
    list (req, res) {
        carsService
            .list()
            .then(({ data, count }) => {
                res.status(200).json({
                    status: 'SUCCESS',
                    data: { cars: data },
                    meta: { total: count }
                })
            })
            .catch((err) => {
                res.status(400).json({
                    status: 'FAILED',
                    message: err.message
                })
            })
    }
}
