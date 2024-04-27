'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailPembelians extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      detailPembelians.belongsTo(models.barangs, {
        foreignKey: 'idBarang',
        as: 'barang',
      });
      detailPembelians.belongsTo(models.pembelians, {
        foreignKey: 'idPembelian',
        as: 'pembeli',
      });
    }
  }
  detailPembelians.init(
    {
      idBarang: DataTypes.INTEGER,
      idPembelian: DataTypes.INTEGER,
      totalHarga: DataTypes.STRING,
      totalBarang: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'detailPembelians',
    }
  );
  return detailPembelians;
};
