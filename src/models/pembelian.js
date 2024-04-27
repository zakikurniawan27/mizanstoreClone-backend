'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembelians extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pembelians.belongsTo(models.pelanggans, {
        foreignKey: 'idPelanggan',
        as: 'pelanggan',
      });
      pembelians.belongsToMany(models.barangs, {
        through: 'detailPembelian',
        foreignKey: 'idPembelian',
        as: 'pembeli',
      });
    }
  }
  pembelians.init(
    {
      voucer: DataTypes.STRING,
      idPelanggan: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'pembelians',
    }
  );
  return pembelians;
};
