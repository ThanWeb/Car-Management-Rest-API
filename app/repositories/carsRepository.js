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
        return Cars.count({
            where: {
                isDeleted: false
            }
        })
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
    },
    edit (id, newValues) {
        Cars.update({ ...newValues }, {
            where: {
                id,
                isDeleted: false
            }
        })
    },
    delete (id, deletedBy) {
        Cars.update({ deletedBy, isDeleted: true }, {
            where: {
                id
            }
        })
    }
}
