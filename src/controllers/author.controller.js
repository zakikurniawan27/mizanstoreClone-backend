const { authors } = require('../models');

const getAllAuthors = async (req, res) => {
  try {
    const data = await authors.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllAuthors };
