'use strict'
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'product',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  )
  product.associate = function (models) {
    product.belongsToMany(models.color, {
      through: 'productColors',
      foreignKey: 'productId'
    })
  }
  return product
}
