const bcrypt = require("bcryptjs");

const adminService = require("../services/admin");

const index = (req, res) => {
  res.render("../views/login.ejs", {errors: []});
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const admin = await adminService.getAdmin(username);

  if (!admin) {
    return res.render("../views/login.ejs", {
      errors: ["Invalid username or password"],
    });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.render("../views/login.ejs", {
      errors: ["Invalid username or password"],
    });
  }

  req.session.adminId = admin._id;

  return res.redirect('/admin')
};

module.exports = {
  index,
  login,
};
