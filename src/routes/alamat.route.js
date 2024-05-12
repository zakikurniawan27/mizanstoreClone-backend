const express = require('express');

const {
  addAlamat,
  updateAlamat,
  getDataAlamatById,
  deleteAlamat,
} = require('../controllers/alamat.controller');

const router = express.Router();

router.post('/addAlamat', addAlamat);
router.put('/updateAlamat/:id', updateAlamat);
router.get('/:id', getDataAlamatById);
router.delete('/deleteAlamat/:id', deleteAlamat);

module.exports = router;
