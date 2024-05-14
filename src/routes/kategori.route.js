const express = require('express');
const { getAllKategoris } = require('../controllers/kategori.controllers');

const router = express.Router();

//menambahkan
router.get('/', getAllKategoris);

//mendapatkan
router.get('/:id', (req, res) => {
  res.status(200).json({
    message: 'kategori',
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    message: 'kategori',
  });
});
router.put('/:id', (req, res) => {
  res.status(200).json({
    message: 'kategori',
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: 'kategori',
  });
});

module.exports = router;
