const express = require('express');
const {registerView, loginView } = require('../Controllers/loginController');
const router = express.Router();
router.get('/register', registerView);
router.get('/login', loginView);
module.exports = router;