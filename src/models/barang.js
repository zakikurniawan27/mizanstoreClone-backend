'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class barangs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      barangs.belongsToMany(models.pembelians, {
        through: 'detailPembelian',
        foreignKey: 'idBarang',
        as: 'barang',
      });
      barangs.belongsTo(models.authors, {
        foreignKey: 'idAuthor',
        as: 'author',
      });
      barangs.belongsTo(models.kategoris, {
        foreignKey: 'idCategory',
        as: 'kategori',
      });
      barangs.belongsTo(models.publishers, {
        foreignKey: 'idPublisher',
        as: 'publisher',
      });
      barangs.belongsTo(models.genres, { foreignKey: 'idGenre', as: 'genre' });
      barangs.hasMany(models.ulasans, { as: 'ulas' });
      barangs.belongsTo(models.spesifikasis, {
        foreignKey: 'idSpesifikasi',
        as: 'spesifikasi',
      });
      barangs.belongsTo(models.wishlists, {
        foreignKey: 'idWishlist',
        as: 'wishlist',
      });
    }
  }
  barangs.init(
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
      modelName: 'barangs',
    }
  );
  return barangs;
};
