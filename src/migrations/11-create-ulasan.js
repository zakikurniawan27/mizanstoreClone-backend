'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ulasan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      idBarang: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'barang',
          key: 'id',
        },
      },
      idPelanggan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pelanggan',
          key: 'id',
        },
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
    await queryInterface.dropTable('ulasans');
  },
};
