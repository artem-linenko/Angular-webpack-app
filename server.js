var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sess = false;

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Support static pages
app.use(express.static(__dirname + '/public'));

app.post('/admin', function(req, res) {
	if (!req.body) return;
	
	if (req.body.name == '1' && req.body.password == '2') {
		res.send('welcome'); 
	} else {
		res.send('forbidden');
	}
})

app.listen(3000);