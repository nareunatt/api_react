require('dotenv').config();
require('./config/DATABASE').connect();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const router = require('./router/user.Router');
app.use('/api', router);
app.use((req, res, next) => {
    res.header({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'});
    next();
})

module.exports = app;