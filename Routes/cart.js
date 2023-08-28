const express = require("express");
const router = express.Router();
const CartController = require("../controllers/Cart");
const {redirectIfNotAuthenticated} = require("../middlewares/auth")

router.get("/", redirectIfNotAuthenticated, CartController.index ).
        post("/", redirectIfNotAuthenticated, CartController.addProductToCart )
        .post("/deleteOne", redirectIfNotAuthenticated ,CartController.deleteProductFromCart)
        .delete("/all", redirectIfNotAuthenticated, CartController.deleteWholeCart)

module.exports = router;