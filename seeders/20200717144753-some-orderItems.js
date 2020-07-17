'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'orderItems',
      [
        {
          orderId: 1,
          productColorId: 2,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 1,
          productColorId: 4,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 1,
          productColorId: 1,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 2,
          productColorId: 3,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 2,
          productColorId: 1,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orderItems', null, {})
  }
}
