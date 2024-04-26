'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      genre.belongsTo(models.kategori, {
        foreignKey: 'idCategory',
        as: 'kategori',
      });
      genre.hasMany(models.barang, { as: 'barang' });
    }
  }
  genre.init(
    {
      name: DataTypes.STRING,
      idCategory: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'genre',
    }
  );
  return genre;
};
