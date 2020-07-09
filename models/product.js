'use strict'
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'product',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      discountId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stockQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      collectionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  )
  product.associate = function (models) {
    product.belongsTo(models.category)
    product.belongsTo(models.collection)
    product.hasOne(models.discount)
    product.belongsToMany(models.order, {
      through: 'orderItems',
      foreignKey: 'productId'
    })
  }
  return product
}
