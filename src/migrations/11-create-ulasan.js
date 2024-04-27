'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ulasans', {
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
          model: 'barangs',
          key: 'id',
        },
      },
      idPelanggan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pelanggans',
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
