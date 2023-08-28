const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/orders")

router.post("/",OrdersController.createOrder)

module.exports = router;