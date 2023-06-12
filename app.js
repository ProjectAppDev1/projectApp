const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const env = require("dotenv");
const ConnectMongo = require("./config/mongoConfig");
env.config();

var app = express();
 
//Routes 
app.use("/about" , require("./Routes/about"));
// Home page test
app.use("/", require("./Routes/HomePageTest"));

// listen to port
app.listen(process.env.PORT,()=>{
    console.log(`listen to port: ${process.env.PORT}`);
    ConnectMongo();
})
