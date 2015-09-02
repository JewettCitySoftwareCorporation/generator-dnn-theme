module.exports.name = 'stylus';

module.exports.build = function (config) {
  var autoprefixer = require('gulp-autoprefixer');
  var gulp = require('gulp');
  var stylus = require('gulp-stylus');
  var rideCss = require('ride-css');

  var autoprefixerOptions = {
    browsers: [
      'safari > 5',
      'firefox > 20'
    ]
  };

  var stylusOptions = {
    use: [rideCss()]
  };

  return function () {
    gulp.src([
      'stylus/**.styl',
      '!stylus/_**.styl'
    ])
    .pipe(stylus(stylusOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(config.dist));
  };
}
