const Order = require("../models/order");

const createOrder = async (userId, wines) => {
  const order = new Order({ userId: userId, wines: wines });
  const newOrder = await order.save();
  return newOrder;
};

const getOrder = async (userId) => {
  const order = await Order.findOne({ userId: userId });
  return order;
};

const getOrders = async () => {
  const orders = await Order.find({});
  return orders;
};

module.exports = {
  createOrder,
  getOrder,
  getOrders
};
