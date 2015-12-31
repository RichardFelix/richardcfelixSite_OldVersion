var express = require('express'),
    app = express(),
    compression = require('compression');

// gzip enabled for faster loading
app.use(compression());

// add jade as the engine
app.set('view engine', 'jade');
// unminify jade html output
app.locals.pretty = true;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

 // routes
app.get('/', function(req, res){
	res.render('index');
});

app.get('*', function(req, res){
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});









    