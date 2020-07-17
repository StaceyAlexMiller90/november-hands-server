'use strict'
module.exports = (sequelize, DataTypes) => {
  const color = sequelize.define(
    'color',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  )
  color.associate = function (models) {
    color.belongsToMany(models.product, {
      through: 'productColor',
      foreignKey: 'colorId'
    })
  }
  return color
}
