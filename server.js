var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var config = require('./config');

var todoRoutes = require('./routes/todoRoutes');


var port = process.env.port || 8000;
mongoose.connect(config.database);


//use body parser so that we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded ({ extended:false}));
app.use(bodyParser.json());

//use morgan to log requests to the console
app.use(morgan('dev'));

app.use('/api',todoRoutes);