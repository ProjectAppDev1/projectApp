
const adminService = require("../services/admin");

const index = (req, res) => {
  res.render("../views/login.ejs");
}

  module.exports = {
    index,
    
  };
  