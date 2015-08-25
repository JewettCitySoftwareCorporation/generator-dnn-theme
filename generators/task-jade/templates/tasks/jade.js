module.exports.name = 'stylus';

module.exports.build = function (config) {
  var gulp = require('gulp');
  var jade = require('gulp-jade');
  var rename = require('gulp-rename');

  var jadeOptions = {
    options: {
      basedir: config.__dirname
    }
  };

  var stylusOptions = {
    use: [rideCss()]
  };

  return function () {
    gulp.src([
      'jade/**.jade',
      '!jade/_**.jade',
      '!jade/templates/**.jade'
    ])
    .pipe(jade(jadeOptions))
    .pipe(rename({
      ext: 'ascx'
    }))
    .pipe(gulp.dest(config.__dirname));
  };
}
