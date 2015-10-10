var express = require('express');
var app = express();
var compression = require('compression');

// gzip enabled for faster loading
app.use(compression());

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

    // set the home page route
    app.get("/", function (req, res) {
      res.redirect("/index.html");
    });

    // redirect if error 404 or any other 
    app.use(function(req, res){
      res.redirect("/index.html");
    });

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});