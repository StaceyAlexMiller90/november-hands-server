'use strict'
module.exports = (sequelize, DataTypes) => {
  const useraddress = sequelize.define(
    'useraddress',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      addressId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  )
  useraddress.associate = function (models) {}
  return useraddress
}
