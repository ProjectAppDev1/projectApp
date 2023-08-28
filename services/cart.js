const Cart = require("../models/Cart");

const createCart = async (userId) => {
  const cart = new Cart({userId: userId, wines: []});
  const newCart = await cart.save();
  return newCart;
};

const getCart = async (userId) => {
  const cart = await Cart.findOne({ userId: userId });
  return cart;
};

const updateCart = async (userId, newCart) => {
  const cart = await Cart.findOneAndUpdate({userId: userId} , newCart, {
      new: true,
      runValidators: true,
    });
    return cart;
}

const deleteCart = async (userId) => {
    const cart = await Cart.findOneAndDelete({userId: userId});
    return cart;
}

module.exports = {
  createCart,
  getCart,
  updateCart,
  deleteCart
};

