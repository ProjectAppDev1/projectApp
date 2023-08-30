
const index = (req, res) => {
    if (!req.session.user)
    {
        res.render("../views/HomePageTest.ejs", {user: false});
    }
    else {
        res.render("../views/HomePageTest.ejs", {user: req.session.user});
    }
}


module.exports =  {
    index
};

