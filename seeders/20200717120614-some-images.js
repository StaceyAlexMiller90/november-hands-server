'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'images',
      [
        {
          path: 'https://res.cloudinary.com/november-hands/image/upload/v1594994152/Products/IMG_5695_1_uzu8qz.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          path: 'https://res.cloudinary.com/november-hands/image/upload/v1594994144/Products/150589706_j0azq4.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          path: 'https://res.cloudinary.com/november-hands/image/upload/v1594994141/Products/128710061_w458mh.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {})
  }
}
