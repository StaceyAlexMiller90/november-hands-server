'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'colors',
      [
        {
          name: 'Speckled Stone',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Marble',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Retro Brown',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('colors', null, {})
  }
}
