const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Wine = new Schema({
    name: {
        type: String,
        isRequired: true
    },
    imgUrl: {
        type: String,
        isRequired: true
    },
    desc: {
        type: String,
        isRequired: true
    },
    price: {
        type: Number,
        isRequired: true
    },
    size:{
        type: Number
    },
    type:{
        type: String,
        isRequired: true
    }
});

module.exports = mongoose.model('Wine', Wine, 'Wines');