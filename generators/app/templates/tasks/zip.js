module.exports.name = 'zip';

module.exports.exclude = true;

module.exports.build = function (config) {
  var gulp = require('gulp');
  var path = require('path');
  var zip = require('gulp-zip');

  var destinationFolder = path.join(config.__dirname, 'dist');
  var packageJSON = require(path.join(config.__dirname, 'package.json'));

  return function () {
    var zipConfig = packageJSON.name +'-'+ packageJSON.version +'.zip';

    gulp.src([
      '**.*',
      '**/*.*',
      '!node_modules/',
      '!node_modules/**'
    ])
    .pipe(zip(zipConfig))
    .pipe(gulp.dest(destinationFolder));
  };
}
