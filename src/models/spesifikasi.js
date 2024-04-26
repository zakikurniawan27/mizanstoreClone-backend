'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spesifikasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  spesifikasi.init({
    sku: DataTypes.STRING,
    isbn: DataTypes.STRING,
    berat: DataTypes.INTEGER,
    dimensi: DataTypes.STRING,
    halaman: DataTypes.INTEGER,
    jenisCover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'spesifikasi',
  });
  return spesifikasi;
};