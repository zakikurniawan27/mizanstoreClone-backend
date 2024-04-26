'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailPembelian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      detailPembelian.belongsTo(models.barang, {
        foreignKey: 'idBarang',
        as: 'barang',
      });
      detailPembelian.belongsTo(models.pembelian, {
        foreignKey: 'idPembelian',
        as: 'pembeli',
      });
    }
  }
  detailPembelian.init(
    {
      idBarang: DataTypes.INTEGER,
      idPembelian: DataTypes.INTEGER,
      totalHarga: DataTypes.STRING,
      totalBarang: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'detailPembelian',
    }
  );
  return detailPembelian;
};
