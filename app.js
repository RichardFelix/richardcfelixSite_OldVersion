var express = require('express'),
    app = express();

// add jade as the engine
app.set('view engine', 'jade');
// unminify jade html output
app.locals.pretty = true;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

var port = process.env.PORT || 3000;

 // routes
app.get('/', function(req, res){
	res.render('index.jade');
});

app.get('*', function(req, res){
	res.render('index.jade');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});









    