const express = require('express');
const router = express.Router();
const {
  getAllBarangs,
  getBarangById,
  deleteBarang,
  searchBarangs,
} = require('../controllers/barang.controller');

router.get('/', getAllBarangs);
router.get('/search', searchBarangs);
router.get('/detail/:id', getBarangById);
router.delete('/:id', deleteBarang);

module.exports = router;
