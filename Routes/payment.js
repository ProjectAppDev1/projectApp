const express = require('express');
const { index } = require('../controllers/payment');
const router = express.Router();
router.get('/', index);
module.exports = router;