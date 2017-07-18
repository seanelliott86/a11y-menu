var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var pump = require('pump');

var paths = {
  srcJS: 'src/**/*.js',
  dist: 'dist'
};

/**
 * DEVELOPMENT
 */
gulp.task('js', function (cb) {
  pump([
      gulp.src(paths.srcJS),
      gulp.dest(paths.dist),
      gulp.src(paths.srcJS),
      uglify(),
      rename({suffix: '.min'}),
      gulp.dest(paths.dist),
    ],
    cb
  );
});

gulp.task('watch', ['js'], function () {
  gulp.watch(paths.srcJS,['js']);
});

gulp.task('default', ['watch']);