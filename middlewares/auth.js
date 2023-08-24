const redirectIfNotAuthenticated = (req, res, next) => {
  console.log(req.session.user);
  if (!req.session.user) {
    return res.redirect("/login");
  }
  next();
};

const redirectIfAdminAuthenticated = (req, res, next) => {
  if (req.session.user.isAdmin) {
    return res.redirect("/admin");
  }
  next();
};

module.exports = {
  redirectIfNotAuthenticated,
 
  redirectIfAdminAuthenticated
};
