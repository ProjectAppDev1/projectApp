
const index = (req, res) => {
    res.render("../views/HomePageTest.ejs", {user: false});
}


module.exports =  {
    index
};

