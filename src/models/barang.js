'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class barangs extends Model {
    static associate(models) {
      barangs.belongsToMany(models.pembelians, {
        through: 'detailPembelian',
        foreignKey: 'idBarang',
        as: 'barang',
      });
      barangs.belongsTo(models.authors, {
        foreignKey: 'authorId',
        as: 'author',
      });
      barangs.belongsTo(models.kategoris, {
        foreignKey: 'kategoriId',
        as: 'kategori',
      });
      barangs.belongsTo(models.publishers, {
        foreignKey: 'idPublisher',
        as: 'publisher',
      });
      barangs.belongsTo(models.genres, { foreignKey: 'genreId', as: 'genre' });
      barangs.hasMany(models.ulasans, { as: 'ulas' });
      barangs.belongsTo(models.spesifikasis, {
        foreignKey: 'idSpesifikasi',
        as: 'spesifikasi',
      });
      barangs.belongsTo(models.wishlists, {
        foreignKey: 'wishlistId',
        as: 'wishlist',
      });
    }
  }
  barangs.init(
    {
      namaBarang: DataTypes.STRING,
      gambar: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      kategoriId: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
      idPublisher: DataTypes.INTEGER,
      deskripsi: DataTypes.TEXT,
      idSpesifikasi: DataTypes.INTEGER,
      wishlistId: DataTypes.INTEGER,
      harga: DataTypes.STRING,
      diskon: DataTypes.INTEGER,
      jumlahBarang: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'barangs',
    }
  );
  return barangs;
};
