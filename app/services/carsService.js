const carsRepository = require('../repositories/carsRepository')

module.exports = {
    async list () {
        try {
            const cars = await carsRepository.findAll()
            const carsCount = await carsRepository.getTotalCars()

            return {
                data: cars,
                count: carsCount
            }
        } catch (err) {
            console.log(err)
        }
    },
    add (requestBody) {
        return carsRepository.add(requestBody)
    },
    detail (id) {
        return carsRepository.detail(id)
    },
    edit (id, newValues) {
        return carsRepository.edit(id, newValues)
    },
    delete (carId, deletedBy) {
        return carsRepository.delete(carId, deletedBy)
    }
}
