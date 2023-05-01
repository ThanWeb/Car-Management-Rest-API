const usersRepository = require('../repositories/usersRepository')

module.exports = {
    async list () {
        try {
            const users = await usersRepository.findAll()
            return {
                data: users
            }
        } catch (err) {
            console.log(err)
        }
    },
    create (requestBody) {
        return usersRepository.create(requestBody)
    },
    findEmail (email) {
        return usersRepository.findEmail(email)
    },
    findRefreshToken (refreshToken) {
        return usersRepository.findRefreshToken(refreshToken)
    },
    updateToken (newValue) {
        return usersRepository.updateToken(newValue)
    },
    logout (id) {
        return usersRepository.logout(id)
    }
}
