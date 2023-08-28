const OrderService = require("../services/orders")

const createOrder = async (req, res) => {
    const userId = req.session.user._id
    const response = await OrderService.createOrder(userId, req.body)
    res.send(response)
}

module.exports =  {
    createOrder
};