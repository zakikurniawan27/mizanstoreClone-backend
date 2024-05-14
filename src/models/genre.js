'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      genres.belongsTo(models.kategoris, {
        foreignKey: 'kategoriId',
        as: 'kategori',
      });
      genres.hasMany(models.barangs, { as: 'barang' });
    }
  }
  genres.init(
    {
      name: DataTypes.STRING,
      kategoriId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'genres',
    }
  );
  return genres;
};
