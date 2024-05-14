const express = require('express');
const router = express.Router();
const BarangController = require('../controllers/barang.controller');

router.get('/', BarangController.getAllBarangs);
router.get('/:id', BarangController.getBarangById);
router.post('/', BarangController.createBarang);
router.put('/:id', BarangController.updateBarang);
router.delete('/:id', BarangController.deleteBarang);

module.exports = router;
