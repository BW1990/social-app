var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');

var app = express();
app.use(bodyParser.json());

var secretKey = 'supersecretkey';

app.use(require('./auth'));

app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));
app.use('/api/posts', require('./controllers/api/posts'));
app.use(require('./controllers/static'));

app.listen(3000, function() {
  console.log('Server listening on', 3000);
});
