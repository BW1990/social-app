var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/social', function() {
  mongoose.Promise = global.Promise;
  console.log('mongodb connected');
});
module.exports = mongoose;
