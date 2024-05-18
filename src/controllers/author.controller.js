const { authors, barangs, kategoris } = require('../models');

const getAllAuthors = async (req, res) => {
  try {
    const data = await authors.findAll({
      include: [
        {
          model: barangs,
          as: 'barang',
          include: [
            {
              model: kategoris,
              as: 'kategori',
            },
          ],
        },
      ],
    });
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllAuthors };
