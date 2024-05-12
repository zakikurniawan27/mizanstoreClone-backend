const { barangs, authors } = require('../models');

// Mendapatkan semua barang
const getAllBarangs = async (req, res) => {
  try {
    const data = await barangs.findAll({
      // include: [
      //   {
      //     model: authors,
      //     as: 'author',
      //   },
      // ],
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
    const data = await barangs.findByPk(id);
    if (data) {
      res.send(data);
    } else {
      res.status(404).send('Data tidak ditemukan');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Membuat barang baru
const createBarang = async (req, res) => {
  try {
    const { namaBarang, harga, stok, kategori } = req.body;
    const newData = await barangs.create({
      namaBarang,
      harga,
      stok,
      kategori,
    });
    res.status(201).send(newData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Memperbarui barang berdasarkan ID
const updateBarang = async (req, res) => {
  try {
    const { id } = req.params;
    const { namaBarang, harga, stok, kategori } = req.body;
    const updated = await barangs.update(
      { namaBarang, harga, stok, kategori },
      {
        where: { id },
      }
    );
    if (updated) {
      res.send('Data berhasil diperbarui');
    } else {
      res.status(404).send('Data tidak ditemukan');
    }
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
  createBarang,
  updateBarang,
  deleteBarang,
};
