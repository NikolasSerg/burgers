const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopListSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('short_list_shops', shopListSchema);
