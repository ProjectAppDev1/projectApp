const express = require('express');
const router = express.Router();

const { showChart } = require('../controllers/PurchaseController');

router.get('/', (req, res) => {
    res.render('about');
});

router.get('/chart', showChart);

module.exports = router;
