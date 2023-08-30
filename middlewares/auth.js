const redirectIfNotAuthenticated = (req, res, next) => {
  console.log(req.session.user);
  if (!req.session.user) {
    return res.redirect("/login");
  }
  next();
};

const redirectIfAdminAuthenticated = (req, res, next) => {
  console.log(req.session.user.isAdmin);
  if (req.session.user.isAdmin) {
    return res.render("../views/admin.ejs");
  }
  next();
};

module.exports = {
  redirectIfNotAuthenticated,
  redirectIfAdminAuthenticated
};
