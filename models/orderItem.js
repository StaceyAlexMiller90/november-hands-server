'use strict'
module.exports = (sequelize, DataTypes) => {
  const orderitems = sequelize.define(
    'orderitems',
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  )
  orderitems.associate = function (models) {
    orderitems.belongsTo(models.order)
    orderitems.belongsTo(models.product)
  }
  return orderitems
}
