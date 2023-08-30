const OrderService = require("../services/orders");

const createOrder = async (req, res) => {
  const userId = req.session.user._id;
  const response = await OrderService.createOrder(userId, req.body);
  res.send(response);
};

const getOrders = async (req, res) => {
  const orders = await OrderService.getOrders();
  res.send(orders);
};

const getOrder = async (req, res) => {
  const order = await OrderService.getOrder(req.param.userId);
  console.log("order", order)
  res.send(order || []);
};

module.exports = {
  createOrder,
  getOrders,
  getOrder,
};
