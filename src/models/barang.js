'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      barang.belongsToMany(models.pembelian, {
        through: 'detailPembelian',
        foreignKey: 'idBarang',
        as: 'barang',
      });
      barang.belongsTo(models.author, { foreignKey: 'idAuthor', as: 'author' });
      barang.belongsTo(models.kategori, {
        foreignKey: 'idCategory',
        as: 'kategori',
      });
      barang.belongsTo(models.publisher, {
        foreignKey: 'idPublisher',
        as: 'publisher',
      });
      barang.belongsTo(models.genre, { foreignKey: 'idGenre', as: 'genre' });
      barang.hasMany(models.ulasan, { as: 'ulas' });
      barang.belongsTo(models.spesifikasi, {
        foreignKey: 'idSpesifikasi',
        as: 'spesifikasi',
      });
      barang.belongsTo(models.wishlist, {
        foreignKey: 'idWishlist',
        as: 'wishlist',
      });
    }
  }
  barang.init(
    {
      namaBarang: DataTypes.STRING,
      gambar: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      idCategory: DataTypes.INTEGER,
      idGenre: DataTypes.INTEGER,
      idAuthor: DataTypes.INTEGER,
      idPublisher: DataTypes.INTEGER,
      deskripsi: DataTypes.TEXT,
      idSpesifikasi: DataTypes.INTEGER,
      idWishlist: DataTypes.INTEGER,
      harga: DataTypes.STRING,
      diskon: DataTypes.INTEGER,
      jumlahBarang: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'barang',
    }
  );
  return barang;
};
