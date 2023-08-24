const express = require("express");
const router = express.Router();
const HomePageContoller = require("../controllers/admin");
const {redirectIfAdminAuthenticated} = require("../middlewares/auth")

router.get("/",redirectIfAdminAuthenticated, HomePageContoller.index )

module.exports = router;
