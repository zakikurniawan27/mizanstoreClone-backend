'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ulasan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ulasan.belongsTo(models.barang, { foreignKey: 'idBarang', as: 'barang' });
      ulasan.belongsTo(models.pelanggan, {
        foreignKey: 'idPelanggan',
        as: 'pelanggan',
      });
    }
  }
  ulasan.init(
    {
      body: DataTypes.TEXT,
      idBarang: DataTypes.INTEGER,
      idPelanggan: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ulasan',
    }
  );
  return ulasan;
};
