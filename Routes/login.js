const express = require("express");
const router = express.Router();
const LoginContoller = require("../controllers/login");

router.get("/",LoginContoller.index).post("/",LoginContoller.login).post("/logout",LoginContoller.logout);

module.exports = router;
