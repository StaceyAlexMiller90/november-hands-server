'use strict'
module.exports = (sequelize, DataTypes) => {
  const orderitems = sequelize.define(
    'orderitems',
    {
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  )
  orderitems.associate = function (models) {}
  return orderitems
}
