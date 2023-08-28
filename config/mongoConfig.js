const mongoose = require("mongoose");

const ConnectMongo = () => {
  //   console.log(process.env);
  // mongoose.connect(process.env.MONOG_URL,{
  //     useNewUrlParser: true,
  //     useUnifiedTopology:true,
  // });

  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  mongoose.connection.once("open", () => {
    console.log("Connected to DB");
  });
};

module.exports = ConnectMongo;
