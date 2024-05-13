const { spesifikasis } = require('../models');

// Mendapatkan semua spesifikasi
const getAllSpesifikasis = async (req, res) => {
  try {
    const data = await spesifikasis.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mendapatkan spesifikasi berdasarkan ID
const getSpesifikasisById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await spesifikasis.findByPk(id);
    if (data) {
      res.send(data);
    } else {
      res.status(404).send('Data tidak ditemukan');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Membuat spesifikasi baru
const createSpesifikasis = async (req, res) => {
  try {
    const { sku, isbn, berat, dimensi, halaman, jenisCover } = req.body;
    const newData = await spesifikasis.create({
      sku,
      isbn,
      berat,
      dimensi,
      halaman,
      jenisCover,
    });
    res.status(201).send(newData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Memperbarui spesifikasi berdasarkan ID
const updateSpesifikasis = async (req, res) => {
  try {
    const { id } = req.params;
    const { sku, isbn, berat, dimensi, halaman, jenisCover } = req.body;
    const updated = await spesifikasis.update(
      { sku, isbn, berat, dimensi, halaman, jenisCover },
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

// Menghapus spesifikasi berdasarkan ID
const deleteSpesifikasis = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await spesifikasis.destroy({
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
  getAllSpesifikasis,
  getSpesifikasisById,
  createSpesifikasis,
  updateSpesifikasis,
  deleteSpesifikasis,
};
