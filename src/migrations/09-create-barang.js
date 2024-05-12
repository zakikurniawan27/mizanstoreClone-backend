'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('barangs', {
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
      kategoriId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'kategoris',
          key: 'id',
        },
      },
      genreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'genres',
          key: 'id',
        },
      },
      authorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'authors', // nama tabel target
          key: 'id' // kunci utama tabel target
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      };
      idPublisher: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'publishers',
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
          model: 'spesifikasis',
          key: 'id',
        },
      },
      wishlistId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'wishlists',
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
