const express = require("express");
const router = express.Router();
const LoginContoller = require("../controllers/login");

router.route("/").get(LoginContoller.index).post(LoginContoller.login);

module.exports = router;
