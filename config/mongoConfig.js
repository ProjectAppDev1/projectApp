const mongoose = require('mongoose');

const ConnectMongo= ()=>{
    mongoose.connect(process.env.MONOG_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    });
    mongoose.connection.once("open",()=>{
        console.log("Connected to DB");
    })
}

module.exports = ConnectMongo

