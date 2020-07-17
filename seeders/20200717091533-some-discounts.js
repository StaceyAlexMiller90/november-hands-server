'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'discounts',
      [
        {
          description: '10% Off',
          discountPercentage: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: '20% Off',
          discountPercentage: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: '50% Off',
          discountPercentage: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: '75% Off',
          discountPercentage: 75,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('discounts', null, {})
  }
}
