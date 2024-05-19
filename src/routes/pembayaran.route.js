const express = require('express');
const router = express.Router();

// Route untuk memproses pembayaran
router.post('/', (req, res) => {
  const paymentDetails = req.body;
  res.status(200).json({ message: 'Pembayaran diproses:', paymentDetails });
});

// Route untuk mendapatkan status pembayaran berdasarkan ID
router.get('/:id', (req, res) => {
  const paymentId = req.params.id;

  res
    .status(200)
    .json({ message: 'Dapatkan status pembayaran dengan ID:', paymentId });
});

module.exports = router;
