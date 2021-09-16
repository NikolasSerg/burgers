const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config.json');
const PORT = config.port;
const url = config.db;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(
    cors({
        origin: "*",
    })
);

const home = require('./routers/homepPageRoute');
const soborna = require('./routers/sobornaRoute');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/home', home);
app.use('/soborna', soborna);

try {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((data) => {

            console.log('підключення до монгоДб успішне')
        })
        .catch((e) => {
            console.log(e, ' - помилка зєднання з базою');
        })

    app.listen(PORT, () => {
        console.log(`server works on ${PORT} port`)
    })
} catch (e) {
    console.error('шось не те зі зєднанням до бази')
}
