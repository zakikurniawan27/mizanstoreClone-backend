const { ulasans } = require('../models');

const getAllUlasan = async (req, res) => {
  try {
    const data = await ulasans.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllUlasan };
