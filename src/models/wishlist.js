'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wishlists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      wishlists.hasMany(models.barangs, { as: 'barang' });
      wishlists.belongsTo(models.pelanggans, {
        foreignKey: 'idPelanggan',
        as: 'pelanggan',
      });
    }
  }
  wishlists.init(
    {
      idPelanggan: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'wishlists',
    }
  );
  return wishlists;
};
