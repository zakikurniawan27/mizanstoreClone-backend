'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembelian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pembelian.belongsTo(models.pelanggan, {
        foreignKey: 'idPelanggan',
        as: 'pelanggan',
      });
      pembelian.belongsToMany(models.barang, {
        through: 'detailPembelian',
        foreignKey: 'idPembelian',
        as: 'pembeli',
      });
    }
  }
  pembelian.init(
    {
      voucer: DataTypes.STRING,
      idPelanggan: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'pembelian',
    }
  );
  return pembelian;
};
