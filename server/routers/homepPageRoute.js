const express = require('express');
const router = express.Router();
const shopsController = require('../controllers/shopsController');

router.get('/', shopsController.getAll);
router.post('/create', shopsController.create);

module.exports = router;

