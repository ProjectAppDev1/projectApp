const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    userId: {
        type: String,
        required: true
    },
    wines: {
        type: Array,
    }
},{timestamps: true});

module.exports = mongoose.model('Order', Order);