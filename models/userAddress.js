'use strict'
module.exports = (sequelize, DataTypes) => {
  const useraddress = sequelize.define(
    'userAddress',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      addressId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  )
  useraddress.associate = function (models) {
    userAddress.belongsTo(models.user)
    userAddress.belongsTo(models.address)
  }
  return userAddress
}
