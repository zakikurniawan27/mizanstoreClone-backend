'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayarans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pembayarans.belongsTo(models.pelanggans, {
        foreignKey: 'idPelanggan',
        as: 'pelanggan',
      });
      pembayarans.belongsTo(models.detailPembelians, {
        foreignKey: 'idDetailPembelian',
        as: 'detailBeli',
      });
    }
  }
  pembayarans.init(
    {
      jasPengiriman: DataTypes.STRING,
      biayaPengiriman: DataTypes.STRING,
      idPelanggan: DataTypes.INTEGER,
      idDetailPembelian: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'pembayarans',
    }
  );
  return pembayarans;
};
