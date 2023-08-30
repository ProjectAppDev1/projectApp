const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/orders");

router
  .post("/", OrdersController.createOrder)
  .get("/", OrdersController.getOrders)
  .get("/:userId", OrdersController.getOrder);

module.exports = router;
