const bcrypt = require("bcryptjs");

const userService = require("../services/user");

const index = (req, res) => {
  res.render("../views/login.ejs", {errors: []});
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await userService.getUser(username);
  if (!user) {
    return res.render("../views/login.ejs", {
      errors: ["Invalid username or password"],
    });
  }
  
  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.render("../views/login.ejs", {
      errors: ["Invalid username or password"],
    });
  }

  req.session.user = user;

  if (!user.isAdmin) {
    return res.render("../views/HomePageTest.ejs", {user: true})
  }

  
  return res.redirect('/admin')
};

module.exports = {
  index,
  login,
};
