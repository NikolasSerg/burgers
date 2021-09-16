const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SobornaShop = new Schema({
    menu: {
        type: Array
    },
    banner: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('soborna', SobornaShop);
