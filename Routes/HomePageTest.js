const express = require("express");
const router = express.Router();
const HomePageContoller = require("../controllers/HomePageTest")

router.get("/",HomePageContoller.index )

module.exports = router;