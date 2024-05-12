const express = require('express');
const router = express.Router();
const {
  getAllPublisher,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
} = require('../controllers/publisher.controller');

router.get('/', getAllPublisher);
router.get('/:id', getPublisherById);
router.post('/', createPublisher);
router.put('/:id', updatePublisher);
router.delete('/:id', deletePublisher);

module.exports = router;
