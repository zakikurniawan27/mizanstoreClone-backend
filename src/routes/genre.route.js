const express = require('express');
const { getAllGenres } = require('../controllers/genre.controllers');

const router = express.Router();

//menambahkan
router.get('/', getAllGenres);

//mendapatkan
router.get('/:id', (req, res) => {
  res.status(200).json({
    message: 'genre',
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    message: 'genre',
  });
});
router.put('/:id', (req, res) => {
  res.status(200).json({
    message: 'genre',
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: 'genre',
  });
});

module.exports = router;
