const Order = require("../models/order")


const index = async(req, res) => {
    const userId = req.session.user._id
    const allOrders = await Order.find({userId: userId})
    console.log(allOrders);
    res.render("../views/PrivateArea.ejs",{ orders: allOrders});
}


module.exports =  {
    index
};