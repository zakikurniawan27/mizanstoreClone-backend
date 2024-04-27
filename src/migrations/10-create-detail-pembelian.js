'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detailPembelians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idBarang: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'barangs',
          key: 'id',
        },
      },
      idPembelian: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pembelians',
          key: 'id',
        },
      },
      totalHarga: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalBarang: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('detailPembelians');
  },
};
