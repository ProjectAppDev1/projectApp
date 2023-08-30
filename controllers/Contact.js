const index = (req, res) => {
  res.render("../views/Contact.ejs", {
    user: req.session.user ? req.session.user : false,
  });
};

module.exports = {
  index,
};
