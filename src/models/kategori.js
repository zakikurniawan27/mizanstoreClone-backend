'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kategoris extends Model {
    static associate(models) {
      kategoris.hasMany(models.genres, { as: 'genre' });
      kategoris.hasMany(models.barangs, {
        as: 'barang',
        include: [
          {
            model: models.authors,
            as: 'author',
          },
        ],
      });
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
