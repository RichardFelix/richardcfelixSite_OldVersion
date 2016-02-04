var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    config = require('./config/config.js'),
    sendgrid  = require('sendgrid')(config.sendgridUser, config.sendgridPwd);

// add jade as the engine
app.set('view engine', 'jade');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

// needed for body-parser to work correctly
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 3000;

 // routes
app.get('/', function(req, res){
	res.render('index');
});

// Contact form 
app.post('/form', function(req, res){

    sendgrid.send({
          to:       config.emailLocation,
          from:     config.emailLocation,
          name:     req.query.name,
          subject:  'My Website Contact Form',
          html:     '<h1>MY Website Contact Form</h1>  <b>NAME:</b> ' + req.query.name + '<br/><br/><b>EMAIL:</b> ' +req.query.email + '<br/><br/> <b>MESSAGE:</b> ' + req.query.message 

      }, function(err, json) {

      if (err) { 
          return console.error(err); 
      }else{ 
          console.log('Success'); 
      }
     }
    ); 
});

app.get('*', function(req, res){
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});









    