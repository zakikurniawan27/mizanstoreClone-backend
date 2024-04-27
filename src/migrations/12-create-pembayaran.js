'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pembayarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      jasPengiriman: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      biayaPengiriman: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idPelanggan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pelanggans',
          key: 'id',
        },
      },
      idDetailPembelian: {
        type: Sequelize.INTEGER,
        model: 'detailPembelians',
        key: 'id',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pembayarans');
  },
};
