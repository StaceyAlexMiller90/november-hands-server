'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'collections',
      [
        {
          name: 'November',
          dropDate: new Date(2020 - 12 - 1),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'December',
          dropDate: new Date(2020 - 11 - 1),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'January',
          dropDate: new Date(2021 - 0 - 1),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('collections', null, {})
  }
}
