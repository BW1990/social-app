var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// server tasks
gulp.task('dev:server', function() {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['ng*', 'gulp*', 'assets*']
  })
});
