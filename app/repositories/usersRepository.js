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
    },
    async findRefreshToken (refreshToken) {
        const user = await Users.findAll({ where: { refreshToken } })
        return user
    },
    async updateToken (newValue) {
        const { id, refreshToken } = newValue
        await Users.update({ refreshToken },
            { where: { id } }
        )
    },
    async logout (id) {
        Users.update({ refreshToken: null }, {
            where: {
                id
            }
        })
    }
}
