const { authors } = require('../models');

const getAllAuthor = async (req, res) => {
  try {
    const data = await authors.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await authors.findByPk(id);
    if (data) {
      res.send(data);
    } else {
      res.status(404).send('Data tidak ditemukan');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createAuthor = async (req, res) => {
  try {
    const { name, deskripsi } = req.body;
    const newData = await authors.create({
      name,
      deskripsi,
    });
    res.status(201).send(newData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, deskripsi } = req.body;
    const updated = await authors.update(
      {
        name,
        deskripsi,
      },
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

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await authors.destroy({
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
  getAllAuthor,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
