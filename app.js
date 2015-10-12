var express = require('express');
var app = express()
var compression = require('compression');

// gzip enabled for faster loading
app.use(compression());

// add jade as the engine
app.set('view engine', 'jade');
// unminify jade html output
app.locals.pretty = true;

var port = process.env.PORT || 3000;

 // routes
app.get("/", function (req, res) {
  res.render("index.jade");
});

app.get("/about", function (req, res) {
  res.render("about.jade");
});

app.get("/resume", function (req, res) {
  res.render("resume.jade");
});

app.get("/projects", function (req, res) {
  res.render("projects.jade");
});

app.get("/contact", function (req, res) {
  res.render("contact.jade");
});

// redirect if error 404 or any other 
app.use(function(req, res){
    res.redirect("/");
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});