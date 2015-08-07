module.exports.name = 'stylus';

module.exports.build = function (config) {
  var gulp = require('gulp');
  var stylus = require('gulp-stylus');
  var rideCss = require('ride-css');

  var stylusOptions = {
    use: [rideCss()]
  };

  return function () {
    gulp.src([
      'stylus/**.styl',
      '!stylus/_**.styl'
    ])
    .pipe(stylus(stylusOptions))
    .pipe(gulp.dest(config.__dirname));
  };
}
