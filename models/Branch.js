const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Branch = new Schema({
    name: {
        type: String,
        isRequired: true
    },
    location: {
        type: String,
        isRequired: true
    },
});

module.exports = mongoose.model('Branch', Branch, "branches");