var express = require('express')
  , routes = require('./routes/routes.js');

var app = express();

app.get('/', routes.index);

app.listen(3000);
console.log('Listening on port 3000');