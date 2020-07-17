'use strict'
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'product',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  )
  product.associate = function (models) {
    product.belongsTo(models.category)
    product.belongsToMany(models.color, {
      through: 'productColors',
      foreignKey: 'productId'
    })
    product.hasMany(models.productColor)
  }
  return product
}
