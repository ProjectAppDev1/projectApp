const mongoose = require("mongoose");

const ConnectMongo = () => {
  //   console.log(process.env);
  // mongoose.connect(process.env.MONOG_URL,{
  //     useNewUrlParser: true,
  //     useUnifiedTopology:true,
  // });

  mongoose.connect(
    "mongodb+srv://yarden:Tal1212@cluster0.uxxxm4j.mongodb.net/?retryWrites=true&w=majority/User",
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
