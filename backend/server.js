var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./routes')(app);

// Support static pages
app.use(express.static(__dirname + '/../public', {extensions: ['htm', 'html']})); // defined default extensions

app.listen(3000);