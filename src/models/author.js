'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      authors.hasMany(models.barangs, { as: 'barang' });
    }
  }
  authors.init(
    {
      name: DataTypes.STRING,
      deskripsi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'authors',
    }
  );
  return authors;
};
