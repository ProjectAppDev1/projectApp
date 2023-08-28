const cartService = require('../services/cart');

const index = async (req, res) => {
  const cart = await cartService.getCart(req.session.user._id)
  res.render("../views/cart.ejs", {cart: cart.wines});
};

const addProductToCart = async (req,res) => {
    console.log(req.body);
    let cart = await cartService.getCart(req.session.user._id)
    if (!cart)
    {
      cart = await cartService.createCart(req.session.user._id)
    }
    cart.wines.push(req.body)
    const updated = await cartService.updateCart(req.session.user._id, cart)
    res.json(updated)
}

const deleteProductFromCart = async (req,res) => {
  const cart = await cartService.getCart(req.session.user._id)
  console.log(req.body);
  const index = cart.wines.indexOf(cart.wines.find(elm => elm._id == req.body._id))
  console.log(index);
  cart.wines.splice(index,1)
  const updated = await cartService.updateCart(req.session.user._id, cart)
  res.json(updated)
}

const deleteWholeCart = async (req,res) => {
  res.json(await cartService.deleteCart(req.session.user._id))
}


module.exports = {
  index,
  addProductToCart,
  deleteProductFromCart,
  deleteWholeCart
};
