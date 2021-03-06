var express = require('express');
var app = express();
app.use(require('body-parser').json());

// middleware
app.use(require('./auth'));

// call controllers
app.use('/api/posts', require('./controllers/api/posts'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));

app.use(require('./controllers/static'));

app.listen(3000, function() {
  console.log('Server listening on', 3000);
});
