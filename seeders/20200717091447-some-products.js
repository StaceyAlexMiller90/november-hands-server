'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Side Plate',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mug',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bucket Vase',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  }
}
