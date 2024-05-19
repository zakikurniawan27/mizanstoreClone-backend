const {
  detailPembelians,
  pembelians,
  pelanggans,
  barangs,
} = require('../models');

const getAllDetailPembelian = async (req, res) => {
  try {
    const data = await detailPembelians.findAll();
    include: [
      {
        model: pembelians,
        as: 'pembelian',
        include: [
          {
            model: pelanggans,
            as: 'pelanggan',
          },
        ],
      },
      {
        model: barangs,
        as: 'barang',
      },
    ],
      res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllDetailPembelian };
