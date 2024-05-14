const { kategoris } = require('../models');

// const getAll = async (req, res, next) => {
//   const data = await authors.findAll();
//   return res.status(200).json(data);
// };
const getAllKategoris = async (req, res) => {
  try {
    const data = await kategoris.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllKategoris };
