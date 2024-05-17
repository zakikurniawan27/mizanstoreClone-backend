const express = require('express');
const router = express.Router();
const { getAllAuthors } = require('../controllers/author.controller');

router.get('/', getAllAuthors);

module.exports = router;
