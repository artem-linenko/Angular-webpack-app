var sess = {
	active: false,
	started: 0
};

module.exports = function(app) {
	app.post('/adminAuth', function(req, res) {
		if (!req.body) return;
		console.log(req.body)
		if (req.body.name == '1' && req.body.password == '2') {
			sess = {
				active: true,
				started: new Date().getTime()
			};

			res.send('welcome'); 
		} else {
			res.send('forbidden');
		}
	});

	app.get('/adminAuth', function(req, res) {
		var now = new Date().getTime();
		
		if (sess.active && now - sess.started < 86400000) {
			res.send('welcome'); 
		} else {
			sess = {
				active: false,
				started: 0
			};

			res.send('forbidden');
		}
	});
}