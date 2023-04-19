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
    }
}
