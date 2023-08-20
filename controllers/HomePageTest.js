
const index = (req, res) => {
    res.render("../views/HomePageTest.ejs", {test: 'yarden'});
}


module.exports =  {
    index
};

