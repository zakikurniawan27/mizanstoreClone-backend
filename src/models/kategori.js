'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      kategori.hasMany(models.genre, { as: 'genre' });
      kategori.hasMany(models.barang, { as: 'barang' });
    }
  }
  kategori.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'kategori',
    }
  );
  return kategori;
};
