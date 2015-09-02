module.exports.name = 'less';

module.exports.build = function (config) {
  var gulp = require('gulp');
  var less = require('gulp-less');

  return function () {
    gulp.src([
      'less/**.less',
      '!less/_**.less'
    ])
    .pipe(less())
    .pipe(gulp.dest(config.dist));
  }
}
