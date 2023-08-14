const Wine = require('../models/wines')

const index = async (req, res) => {
//   const wines = [
//     {
//       name: "Yarden",
//       price: 23,
//       imgUrl:
//         "https://shoppy.co.il/cdn/shop/products/barkanriesling_1200x1200.png?v=1643242115",
//       size: 1,
//       desc: "This is the best wine",
//     },
//     {
//       name: "Barkan",
//       price: 33,
//       size: 0.75,
//       imgUrl:
//         "https://www.barkan-winery.co.il/sites/default/files/wines/qlsyq_shyrz.png",
//       desc: "This is the not the best wine",
//     },
//   ];
  const wines = await Wine.find({});
  res.render("../views/Products.ejs", { wines });
};

module.exports = {
  index,
};
