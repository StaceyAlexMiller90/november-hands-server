'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'productColors',
      [
        {
          productId: 3,
          colorId: 1,
          price: 50,
          active: true,
          stockQuantity: 10,
          collectionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 3,
          colorId: 2,
          discountId: 2,
          price: 50,
          active: true,
          stockQuantity: 20,
          collectionId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 3,
          colorId: 3,
          discountId: 1,
          price: 50,
          active: true,
          stockQuantity: 10,
          collectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 2,
          colorId: 1,
          discountId: 3,
          price: 25,
          active: true,
          stockQuantity: 15,
          collectionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 2,
          colorId: 2,
          discountId: 3,
          price: 30,
          active: true,
          stockQuantity: 15,
          collectionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 1,
          colorId: 3,
          discountId: 1,
          price: 10,
          active: true,
          stockQuantity: 15,
          collectionId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('productColors', null, {})
  }
}
