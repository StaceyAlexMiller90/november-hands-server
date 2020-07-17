'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'productColorImages',
      [
        {
          productColorId: 1,
          imageId: 3,
          imageViewOrder: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productColorId: 4,
          imageId: 2,
          imageViewOrder: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productColorId: 6,
          imageId: 1,
          imageViewOrder: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productColorId: 2,
          imageId: 1,
          imageViewOrder: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productColorId: 3,
          imageId: 1,
          imageViewOrder: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productColorId: 5,
          imageId: 1,
          imageViewOrder: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('productColorImages', null, {})
  }
}
