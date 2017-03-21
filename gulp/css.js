var gulp = require('gulp');
var stylus = require('gulp-stylus');

// css tasks
gulp.task('css', function() {
  gulp.src('css/**/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('assets'))
});

gulp.task('watch:css', function() {
  gulp.watch('css/**/*.styl', ['css'])
});
