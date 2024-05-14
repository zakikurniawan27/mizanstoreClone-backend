'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ulasans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ulasans.belongsTo(models.barangs, {
        foreignKey: 'barangId',
        as: 'barang',
      });
      ulasans.belongsTo(models.pelanggans, {
        foreignKey: 'PelangganId',
        as: 'pelanggan',
      });
    }
  }
  ulasans.init(
    {
      body: DataTypes.TEXT,
      barangId: DataTypes.INTEGER,
      PelangganId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ulasans',
    }
  );
  return ulasans;
};
