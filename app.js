var express = require('express')
  , routes = require('./routes/routes.js');

var app = express();

// Config
app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(app.router);
	app.use(express.static(__dirname +'/public'));
});

app.get('/', routes.index);

app.listen(3000);
console.log('Listening to your pants');
