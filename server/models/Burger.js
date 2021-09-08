const mongoose = require('mongoose');
const {model} = require("mongoose");
const Schema = mongoose.Schema;

const burgerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desciption: {
        type: String
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('burger', burgerSchema);