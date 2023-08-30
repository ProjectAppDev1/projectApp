const index = (req, res) => {
  res.render("../views/about.ejs", {
    user: req.session.user ? req.session.user : false,
  });
};

module.exports = {
  index,
};
