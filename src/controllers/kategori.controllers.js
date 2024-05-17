const { kategoris, genres, barangs, authors } = require('../models');

const getAllKategoris = async (req, res) => {
  try {
    const data = await kategoris.findAll({
      include: [
        {
          model: genres,
          as: 'genre',
        },
        {
          model: barangs,
          as: 'barang',
          include: [
            {
              model: authors,
              as: 'author',
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

module.exports = { getAllKategoris };
