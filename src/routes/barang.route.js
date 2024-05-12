const express = require('express');
const router = express.Router();
const {
  getAllBarangs,
  getBarangById,
  createBarang,
  updateBarang,
  deleteBarang,
} = require('../controllers/barang.controller');

router.get('/', getAllBarangs);
router.get('/:id', getBarangById);
router.post('/', createBarang);
router.put('/:id', updateBarang);
router.delete('/:id', deleteBarang);

module.exports = router;
