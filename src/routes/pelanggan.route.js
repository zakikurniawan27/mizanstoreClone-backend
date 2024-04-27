const express = require('express');
const {
  register,
  login,
  getPelangganById,
  updatePelanggan,
  deletePelanggan,
} = require('../controllers/pelanggan.controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getPelangganById);
router.put('/updateuser/:id', updatePelanggan);
router.delete('/deleteuser/:id', deletePelanggan);

module.exports = router;
