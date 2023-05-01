'use strict'

const bcryptjs = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        const salt = await bcryptjs.genSalt()
        const hashPassword = await bcryptjs.hash('thisissuperadmin', salt)

        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    email: 'carapisuperadmin@gmail.com',
                    password: hashPassword,
                    role: 'superadmin',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {})
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
}
