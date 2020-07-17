'use strict'
const bcrypt = require('bcrypt')
const { SALT_ROUNDS } = require('../config/constants')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Hannah',
          lastName: 'Li',
          email: 'novemberhands@gmail.com',
          password: bcrypt.hashSync('hannah1234', SALT_ROUNDS),
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Stacey',
          lastName: 'Miller',
          email: 'staceyalexmiller@gmail.com',
          password: bcrypt.hashSync('stacey1234', SALT_ROUNDS),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Lynne',
          lastName: 'Grey',
          email: 'lynne@lynne.com',
          password: bcrypt.hashSync('lynne1234', SALT_ROUNDS),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
