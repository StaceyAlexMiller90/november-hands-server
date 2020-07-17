'use strict'
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'product',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      colorName: {
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
      active: {
        type: DataTypes.BOOLEAN,
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
    product.hasMany(models.image, {
      through: 'productImage',
      foreignKey: 'productId'
    })
    product.hasMany(models.color, {
      through: 'productColor',
      foreignKey: 'productId'
    })
  }
  return product
}
