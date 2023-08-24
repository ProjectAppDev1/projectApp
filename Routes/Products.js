const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/Products")

router.get("/",ProductsController.index ).post("/",)

module.exports = router;

