const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const env = require("dotenv");
const ConnectMongo = require("./config/mongoConfig");
const Purchase = require("./models/Purchase"); 
const PurchaseController = require("./controllers/PurchaseController"); 
env.config();

var app = express();

app.use(
  session({
    secret: "50c29d05f9e4c4df37215a8f2b4d02a144853fdeca848f5478b3a67fa9fb4a0c",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", require("./Routes/HomePageTest"));
app.use("/about", require("./Routes/about"));
app.use("/PrivateArea", require("./Routes/PrivateArea"));
app.use("/payment", require("./Routes/payment"));
app.use("/login", require("./Routes/login"));
app.use("/register", require("./Routes/register"));
app.use("/Products", require("./Routes/Products"));
app.use("/Contact", require("./Routes/Contact"));
app.use("/admin", require("./Routes/admin"));
app.use("/Branch", require("./Routes/Branch"));
app.use("/cart", require("./Routes/cart"));

// Adding ejs
app.set("view engine", "ejs"); 
app.use(express.static(__dirname + "/assets"));
app.use("/assets", express.static("assets"));

// Home page route
app.get("/", (req, res) => {
  res.send("Home Page");
});


app.get("/about", async (req, res) => {
  try {
    const purchases = await Purchase.find();
    
    const monthlyData = {};
    purchases.forEach(purchase => {
      const month = purchase.date.split("-")[1]; // משווה על פי החודש בפורמט YYYY-MM-DD
      if (!monthlyData[month]) {
        monthlyData[month] = [];
      }
      monthlyData[month].push(purchase.amount);
    });
    
    const labels = Object.keys(monthlyData);
    const data = labels.map(month => {
      const sum = monthlyData[month].reduce((acc, curr) => acc + curr, 0);
      return sum / monthlyData[month].length;
    });

    res.render("about", { labels, data });

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


// Start listening
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
  ConnectMongo();
});
