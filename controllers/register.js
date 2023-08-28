const userService = require("../services/user");

const index = (req, res) => {
  res.render("../views/register.ejs",{errors: []});
};

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body)
    req.session.user = user;
    return res.render("../views/HomePageTest.ejs", {user: true})
  } catch (error) {
    console.log(error);
    return res.render("../views/register.ejs", {
        errors: ["Could Not Create User !"],
      });
  }
};

module.exports = {
  index,
  register,
};
