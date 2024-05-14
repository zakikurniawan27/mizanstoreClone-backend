const express = require('express');
const { getAllUlasan } = require('../controllers/ulasan.controllers');

const router = express.Router();

//menambahkan
router.get('/', getAllUlasan);

//mendapatkan
router.get('/:id', (req, res) => {
  res.status(200).json({
    message: 'Author',
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    message: 'ulasan',
  });
});
router.put('/:id', (req, res) => {
  res.status(200).json({
    message: 'ulasan',
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: 'ulasan',
  });
});

module.exports = router;
