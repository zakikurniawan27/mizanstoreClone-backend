const express = require('express');
const router = express.Router();
const {
  getAllBarangs,
  getBarangById,
  deleteBarang,
} = require('../controllers/barang.controller');

router.get('/', getAllBarangs);
router.get('/:id', getBarangById);
router.delete('/:id', deleteBarang);

module.exports = router;
