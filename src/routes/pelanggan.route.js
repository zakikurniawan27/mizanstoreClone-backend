const express = require('express');
const {
  register,
  login,
  getPelangganById,
  updatePelanggan,
  deletePelanggan,
} = require('../controllers/pelanggan.controller');
const { verify } = require('../middlewares/verifytoken');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', verify, getPelangganById);
router.put('/updateuser/:id', verify, updatePelanggan);
router.delete('/deleteuser/:id', verify, deletePelanggan);

module.exports = router;
