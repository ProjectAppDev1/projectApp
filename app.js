const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const env = require("dotenv");
const ConnectMongo = require("./config/mongoConfig");
env.config();

var app = express();
 
//Routes 
// Home page test
app.use("/", require("./Routes/HomePageTest"));
app.use("/about" , require("./Routes/about"));
app.use("/PrivateArea",require("./Routes/PrivateArea"));
app.use("/payment",require("./Routes/payment"));
app.use("/login",require("./Routes/login"));
app.use("/Products",require("./Routes/Products"));
app.use("/Contact",require("./Routes/Contact"));
app.use("/Contact",require("./Routes/admin"));

//Adding ejs
app.set("assets", "ejs");
app.engine("ejs", require("ejs").__express);
app.use(express.static(__dirname + "/assets"));
app.use('/assets', express.static('assets'))

// listen to port
app.listen(process.env.PORT,()=>{
    console.log(`listen to port: ${process.env.PORT}`);
    ConnectMongo();
})


// יצירת מודל המשתמש
const User = mongoose.model('User', {
  name: String,
  email: String,
});
