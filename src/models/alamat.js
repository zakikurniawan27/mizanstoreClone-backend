'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alamats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      alamats.belongsTo(models.pelanggans, {
        foreignKey: 'pelangganId',
        as: 'pelanggan',
      });
    }
  }
  alamats.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      nomorTelepon: DataTypes.STRING,
      provinsi: DataTypes.STRING,
      kota: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      alamatLengkap: DataTypes.TEXT,
      kodePos: DataTypes.STRING,
      pelangganId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'alamats',
    }
  );
  return alamats;
};
