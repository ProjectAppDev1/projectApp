const express = require("express");
const router = express.Router();
const RegisterController = require("../controllers/register");

router.route("/").get(RegisterController.index).post(RegisterController.register);

module.exports = router;
