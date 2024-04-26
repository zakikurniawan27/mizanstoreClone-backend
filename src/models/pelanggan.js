'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelanggan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pelanggan.hasMany(models.pembelian, { as: 'pembeli' });
      pelanggan.hasMany(models.ulasan, { as: 'ulas' });
      pelanggan.hasMany(models.wishlist, { as: 'wishlist' });
      pelanggan.hasMany(models.pembayaran, { as: 'bayar' });
    }
  }
  pelanggan.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      nomorTelepon: DataTypes.INTEGER,
      tanggalLahir: DataTypes.DATE,
      jenisKelamin: DataTypes.STRING,
      provinsi: DataTypes.STRING,
      kota: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      alamat: DataTypes.STRING,
      kodePos: DataTypes.INTEGER,
      roles: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'pelanggan',
    }
  );
  return pelanggan;
};
