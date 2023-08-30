const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/Products");

router.get("/", ProductsController.index).post("/", ProductsController.createWine).get("/allWines", ProductsController.getAllWines);

module.exports = router;
