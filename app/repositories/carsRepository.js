const { Cars } = require('../models')

module.exports = {
    findAll () {
        return Cars.findAll({
            attributes: ['name', 'type', 'size', 'rentPerDay'],
            where: {
                isDeleted: false
            },
            order: [
                ['name', 'ASC']
            ]
        })
    },
    getTotalCars () {
        return Cars.count()
    },
    add (createArgs) {
        return Cars.create(createArgs)
    },
    detail (id) {
        return Cars.findOne({
            attributes: ['name', 'type', 'size', 'rentPerDay'],
            where: {
                id,
                isDeleted: false
            }
        })
    }
}
