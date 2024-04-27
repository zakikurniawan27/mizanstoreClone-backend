'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelanggans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pelanggans.hasMany(models.pembelians, { as: 'pembeli' });
      pelanggans.hasMany(models.ulasans, { as: 'ulas' });
      pelanggans.hasMany(models.wishlists, { as: 'wishlist' });
      pelanggans.hasMany(models.pembayarans, { as: 'bayar' });
    }
  }
  pelanggans.init(
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
      modelName: 'pelanggans',
    }
  );
  return pelanggans;
};
