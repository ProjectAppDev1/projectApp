const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    userId: {
        type: String,
        isRequired: true
    },
    wines: {
        type: Array
    }
});

module.exports = mongoose.model('Cart', Cart);