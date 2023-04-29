'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Cars',
            [
                {
                    name: 'Toyota Supra',
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Nissan Skyline GTR',
                    userId: 1,
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
         * await queryInterface.bulkDelete('Cars', null, {});
         */
    }
}
