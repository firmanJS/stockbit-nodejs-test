'use strict'
const express = require('express'),
exception = require('./helpers/Exception'),
routing = require('./config/Route'),
app = express()
require('dotenv').config()

app.use(routing); //routing
app.use(exception.Handler404); // handler 404
app.use(exception.Handler500); //handler 500
app.listen(process.env.APP_PORT);
console.log(`app running in port ${process.env.APP_PORT}`);