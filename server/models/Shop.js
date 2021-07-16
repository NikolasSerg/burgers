const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('shops ', shopSchema);
