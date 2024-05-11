'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alamats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      nomorTelepon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provinsi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kota: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kecamatan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alamatLengkap: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      kodePos: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pelangganId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'id',
          model: 'pelanggans',
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
    await queryInterface.dropTable('alamats');
  },
};
