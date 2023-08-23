const express = require("express");
const router = express.Router();
const LoginContoller = require("../controllers/login");
const {redirectIfAuthenticated} = require("../middlewares/auth")

router.route("/").get(redirectIfAuthenticated, LoginContoller.index).post(LoginContoller.login);

module.exports = router;
