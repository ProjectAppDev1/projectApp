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

app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId; // קבלת המזהה של המשתמש מהבקשה

  // חיבור למסד הנתונים
  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      // חיפוש המשתמש במסד הנתונים על פי המזהה
      User.findById(userId, (err, user) => {
        if (err) {
          console.log('Error finding user:', err);
          res.status(500).send('Internal Server Error');
          return;
        }

        if (!user) {
          res.status(404).send('User not found');
          return;
        }

        // עדכון המידע של המשתמש
        user.name = 'New Name';
        user.email = 'newemail@example.com';

        // שמירת המשתמש במסד הנתונים
        user.save((err) => {
          if (err) {
            console.log('Error updating user:', err);
            res.status(500).send('Internal Server Error');
            return;
          }

          res.send('User updated successfully');
        });
      });
    })
    .catch((err) => {
      console.log('Error connecting to MongoDB:', err);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
