const { Cars } = require('../models')

module.exports = {
    findAll () {
        return Cars.findAll()
    },
    getTotalCars () {
        return Cars.count()
    }
}
