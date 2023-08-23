const express = require("express");
const router = express.Router();
const HomePageContoller = require("../controllers/admin");
const { redirectIfNotAuthenticated } = require("../middlewares/auth");

router.get("/",redirectIfNotAuthenticated, HomePageContoller.index )

module.exports = router;
