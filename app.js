var express = require('express'),
    app = express(),
    compression = require('compression'),
    routes = require('./routes');

// gzip enabled for faster loading
app.use(compression());

// add jade as the engine
app.set('view engine', 'jade');
// unminify jade html output
app.locals.pretty = true;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

var port = process.env.PORT || 3000;

 // routes
app.get('/', routes.index);
app.get('/:name', routes.partials);

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});