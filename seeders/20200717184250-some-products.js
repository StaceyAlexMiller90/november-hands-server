'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Side Plate',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mug',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bucket Vase',
          categoryId: 1,
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
