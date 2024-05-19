const { pembayarans, detailPembelians, pelanggans, barangs } = require('../models');

const getAllPembayaran = async (req, res) => {
  try {
    const data = await pembayarans.findAll();
	include: [
	{
          model: detailPembelians,
          as: 'detailPembelian',
          include: [
            {
              model: pelanggans,
              as: 'pelanggan',
            },
	    {
              model: barangs,
              as: 'barang',
            },
          ],
        },
      ],
    
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllPembayaran };