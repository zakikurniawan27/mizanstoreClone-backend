'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pembayaran.belongsTo(models.pelanggan, {
        foreignKey: 'idPelanggan',
        as: 'pelanggan',
      });
      pembayaran.belongsTo(models.detailPembelian, {
        foreignKey: 'idDetailPembelian',
        as: 'detailBeli',
      });
    }
  }
  pembayaran.init(
    {
      jasPengiriman: DataTypes.STRING,
      biayaPengiriman: DataTypes.STRING,
      idPelanggan: DataTypes.INTEGER,
      idDetailPembelian: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'pembayaran',
    }
  );
  return pembayaran;
};
