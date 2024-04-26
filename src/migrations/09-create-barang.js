'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('barang', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      namaBarang: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gambar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      idCategory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'kategori',
          key: 'id',
        },
      },
      idGenre: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'genre',
          key: 'id',
        },
      },
      idAuthor: {
        type: Sequelize.INTEGER,
        references: {
          model: 'author',
          key: 'id',
        },
      },
      idPublisher: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'publisher',
          key: 'id',
        },
      },
      deskripsi: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      idSpesifikasi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spesifikasi',
          key: 'id',
        },
      },
      idWishlist: {
        type: Sequelize.INTEGER,
        references: {
          model: 'wishlist',
          key: 'id',
        },
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      diskon: {
        type: Sequelize.INTEGER,
      },
      jumlahBarang: {
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
    await queryInterface.dropTable('barangs');
  },
};
