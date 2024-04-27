'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kategoris extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      kategoris.hasMany(models.genres, { as: 'genre' });
      kategoris.hasMany(models.barangs, { as: 'barang' });
    }
  }
  kategoris.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'kategoris',
    }
  );
  return kategoris;
};
