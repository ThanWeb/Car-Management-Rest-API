const { Users } = require('../models')

module.exports = {
    findAll () {
        return Users.findAll()
    },
    create (createArgs) {
        return Users.create(createArgs)
    },
    async findEmail (email) {
        const emailExists = await Users.findOne({ where: { email } })
        return emailExists
    }
}
