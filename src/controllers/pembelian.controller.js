const { pembelians, pelanggans } = require('../models');

const getAllPembelian = async (req, res) => {
  try {
    const data = await pembelians.findAll();
    include: [
      {
        model: pelanggans,
        as: 'pelanggan',
      },
    ],
      res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllPembelian };
