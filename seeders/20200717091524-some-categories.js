'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Vases',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cups',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bowls',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  }
}
