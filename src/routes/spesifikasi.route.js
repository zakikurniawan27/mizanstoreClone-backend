const express = require('express');
const router = express.Router();
const {
  getAllSpesifikasis,
  getSpesifikasisById,
  createSpesifikasis,
  updateSpesifikasis,
  deleteSpesifikasis,
} = require('../controllers/spesifikasiController');

router.get('/', getAllSpesifikasis);
router.get('/:id', getSpesifikasisById);
router.post('/', createSpesifikasis);
router.put('/:id', updateSpesifikasis);
router.delete('/:id', deleteSpesifikasis);

module.exports = router;
