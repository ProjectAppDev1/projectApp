const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const env = require("dotenv");
const ConnectMongo = require("./config/mongoConfig");
var path = require("path");
const WebSocket = require('ws');
const http = require('http');

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
app.use(express.static(path.join(__dirname + "../views")));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
// Home page test
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
app.use("/orders", require("./Routes/orders"));

//Adding ejs
app.set("view engine", "ejs"); // Set the view engine to ejs
app.use(express.static(__dirname + "/assets"));
app.use("/assets", express.static("assets"));

app.get("/getSalesData", async (req, res) => {
  const client = new MongoClient("mongodb://localhost:27017/", {
    useNewUrlParser: true,
  });
  try {
    await client.connect();
    const db = client.db("Purchase");
    const collection = db.collection("purchase");

    const result = await collection.find().toArray();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  } finally {
    await client.close();
  }
});

// Create a simple HTTP server
const server = http.createServer(app);

// Initialize WebSocket server
const wss = new WebSocket.Server({ noServer: true });

wss.on("connection", (socket) => {
  socket.send("Hello, client!");
  socket.on("message", (message) => {
    console.log("Received:", message);
  });
});

// Handle WebSocket upgrade on the HTTP server
server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (socket) => {
    wss.emit("connection", socket, request);
  });
});

// Start the HTTP server
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  ConnectMongo();
});
