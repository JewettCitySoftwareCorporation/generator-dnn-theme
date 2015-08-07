module.exports.name = 'autoprefixer';

module.exports.priority = 'last';

module.exports.build = function (config) {
  var autoprefixer = require('gulp-autoprefixer');
  var gulp = require('gulp');

  var autoprefixerOptions = {
    browsers: [
      'safari > 5',
      'firefox > 20'
    ]
  };

  return function () {
    gulp.src([
      config.__dirname +'/**.css'
    ])
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(config.__dirname));
  };
}
