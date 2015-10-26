var express = require('express'),
    app = express(),
    compression = require('compression'),
    routes = require('./routes')
    bodyParser = require('body-parser'),
    sendgrid  = require('sendgrid')('rfelix', 'richiesd22');;

app.use(bodyParser.urlencoded({ extended: true })); 

// gzip enabled for faster loading
app.use(compression());

// add jade as the engine
app.set('view engine', 'jade');
// unminify jade html output
app.locals.pretty = true;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

var port = process.env.PORT || 3000;

//submit form function
    app.post('/form', function(req, res){
        
        sendgrid.send({
          to:       'me@richardcfelix.com',
          from:     'me@richardcfelix.com',
          name:     req.body.name,
          subject:  'Website Contact Form',
          html:     '<h1>Website Contact Form</h1>  <b>NAME:</b> ' + req.body.name + '<br/><br/><b>EMAIL:</b> ' +req.body.email + '<br/><br/> <b>PHONE:</b> ' + req.body.tel + ' <br/><br/> <b>MESSAGE:</b> ' + req.body.message 
            
        }, function(err, json) {
            
          if (err) { 
              return console.error(err); 
          }else{ 
              console.log('Success'); 
              //res.render('../views/partials/thankyou.html'); 
          }
         }
        ); 
    });

 // routes
app.get('/', routes.index);
//app.get('/partials/:name', routes.partials);
//app.get('/:name', routes.partials);

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});









    