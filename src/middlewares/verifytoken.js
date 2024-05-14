const jwt = require('jsonwebtoken');
const { pelanggans } = require('../models');

const verify = async (req, res, next) => {
  try {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(403).send({
        message: 'no token provided',
      });
    }

    const tokenCheck = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    if (!tokenCheck) {
      return res.status(403).send({
        message: 'failed to authenticate jwt',
      });
    }

    req.pelanggans = tokenCheck;

    return next();
  } catch (error) {
    return res.status(403).send({
      message: error,
    });
  }
};

module.exports = { verify };
