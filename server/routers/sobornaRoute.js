const express = require('express');
const router = express.Router();
const sobornaController = require('../controllers/sobornaController');

router.get('/', sobornaController.getInfo);

module.exports = router;

