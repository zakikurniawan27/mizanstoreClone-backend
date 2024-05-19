const express = require('express');
const router = express.Router();
//membuat pesanan
router.post('/', (req, res) => {
  const newOrder = req.body;
  res.status(200).json({
    message: 'Pesanan baru dibuat: ',
    newOrder,
  });
});
//mengambil data pesanan
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'dapatkan semua pesanan',
  });
});
//mengambil data dengan ID
router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  res
    .status(200)
    .json({ message: 'Dapatkan detail pesanan dengan ID: ', orderId });
});

// Route untuk memperbarui pesanan berdasarkan ID
router.put('/:id', (req, res) => {
  const orderId = req.params.id;
  const updatedOrder = req.body;
  res.status(200).json({
    message: 'Perbarui pesanan dengan ID: ',
    orderId,
    data: updatedOrder,
  });
});

// Route untuk menghapus pesanan berdasarkan ID
router.delete('/:id', (req, res) => {
  const orderId = req.params.id;
  res.status(200).json({ message: 'Hapus pesanan dengan ID: ', orderId });
});
module.exports = router;
