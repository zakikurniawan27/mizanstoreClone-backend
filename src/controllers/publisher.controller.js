const { publishers } = require('../models');

const getAllPublisher = async (req, res) => {
  try {
    const data = await publishers.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getPublisherById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await publishers.findByPk(id);
    if (data) {
      res.send(data);
    } else {
      res.status(404).send('Data tidak ditemukan');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createPublisher = async (req, res) => {
  try {
    const { name } = req.body;
    const newData = await publishers.create({
      name,
    });
    res.status(201).send(newData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePublisher = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updated = await publishers.update(
      {
        name,
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

const deletePublisher = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await publishers.destroy({
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
  getAllPublisher,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
};
