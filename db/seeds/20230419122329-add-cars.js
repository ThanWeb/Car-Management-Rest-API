'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Cars',
            [
                {
                    name: 'Toyota Supra',
                    type: 'Sport',
                    size: 'Medium',
                    rentPerDay: 1000000,
                    owner: 1,
                    lastEditedBy: 1,
                    isDeleted: false,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Nissan Skyline GTR',
                    type: 'Sport',
                    size: 'Medium',
                    rentPerDay: 1200000,
                    owner: 1,
                    lastEditedBy: 1,
                    isDeleted: false,
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
