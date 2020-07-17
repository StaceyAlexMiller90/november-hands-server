'use strict'
module.exports = (sequelize, DataTypes) => {
  const collection = sequelize.define(
    'collection',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dropDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {}
  )
  collection.associate = function (models) {
    collection.hasMany(models.productColor)
  }
  return collection
}
