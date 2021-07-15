const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config.json');
const PORT = config.port;
const url = config.db;

try{
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT,() => {
        console.log(`server works on ${PORT} port`)
    })
}
catch (e) {
    console.error('шось не те зі зєднанням до бази')
}
