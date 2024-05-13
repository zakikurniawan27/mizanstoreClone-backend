const express = require('express');

const {
  addAlamat,
  updateAlamat,
  getDataAlamatById,
  deleteAlamat,
  getDataAlamatByPelangganId,
} = require('../controllers/alamat.controller');
const { verify } = require('../middlewares/verifytoken');

const router = express.Router();

router.post('/addAlamat', verify, addAlamat);
router.put('/updateAlamat/:id', verify, updateAlamat);
router.get('/detailAlamat/:id', verify, getDataAlamatById);
router.delete('/deleteAlamat/:id', verify, deleteAlamat);
router.get('/pelanggan/:id', verify, getDataAlamatByPelangganId);

module.exports = router;
