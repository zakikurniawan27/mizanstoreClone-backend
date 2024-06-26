const {
  barangs,
  spesifikasis,
  authors,
  genres,
  publishers,
  ulasans,
  kategoris,
} = require('../models');

// Mendapatkan semua barang
const getAllBarangs = async (req, res) => {
  try {
    const data = await barangs.findAll({
      include: [
        {
          model: spesifikasis,
          as: 'spesifikasi',
        },
        {
          model: authors,
          as: 'author',
        },
        {
          model: genres,
          as: 'genre',
        },
        {
          model: publishers,
          as: 'publisher',
        },
        {
          model: ulasans,
          as: 'ulas',
        },
        {
          model: kategoris,
          as: 'kategori',
        },
      ],
    });
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mendapatkan barang berdasarkan ID
const getBarangById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await barangs.findByPk(id, {
      include: [
        {
          model: spesifikasis,
          as: 'spesifikasi',
        },
        {
          model: authors,
          as: 'author',
        },
        {
          model: genres,
          as: 'genre',
        },
        {
          model: publishers,
          as: 'publisher',
        },
        {
          model: ulasans,
          as: 'ulas',
        },
        {
          model: kategoris,
          as: 'kategori',
        },
      ],
    });
    if (data) {
      res.send(data);
    } else {
      res.status(404).send('Data tidak ditemukan');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const searchBarangs = async (req, res) => {
  try {
    const { query } = req.query;
    const data = await barangs.findAll({
      where: {
        [sequelize.Op.or]: [
          { nama: { [sequelize.Op.like]: `%${query}%` } },
          { deskripsi: { [sequelize.Op.like]: `%${query}%` } },
        ],
      },
      include: [
        {
          model: spesifikasis,
          as: 'spesifikasi',
        },
        {
          model: authors,
          as: 'author',
        },
        {
          model: genres,
          as: 'genre',
        },
        {
          model: publishers,
          as: 'publisher',
        },
        {
          model: ulasans,
          as: 'ulas',
        },
        {
          model: kategoris,
          as: 'kategori',
        },
      ],
    });
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Menghapus barang berdasarkan ID
const deleteBarang = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await barangs.destroy({
      where: { id },
    });
    if (deleted) {
      res.send('Data berhasil dihapus');
    } else {
      res.status(404).send('Data tidak ditemukan');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllBarangs,
  getBarangById,
  deleteBarang,
  searchBarangs,
};
