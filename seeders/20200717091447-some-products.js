'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Bucket Vase',
          colorName: 'Marble',
          price: 35,
          discountId: 1,
          active: true,
          stockQuantity: 10,
          categoryId: 1,
          collectionId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Incense Holder',
          colorName: 'White',
          price: 35,
          discountId: 1,
          active: true,
          stockQuantity: 10,
          categoryId: 1,
          collectionId: 2,
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
