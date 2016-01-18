module.exports.name = 'package';

module.exports.exclude = true;

module.exports.build = function (config) {
  var fs = require('fs');
  var glob = require('glob');
  var gulp = require('gulp');
  var rename = require('gulp-rename');
  var path = require('path');
  var xmlbuilder = require('xmlbuilder');
  var zip = require('gulp-zip');

  var xmlFileName = path.join(config.__dirname, 'manifest.dnn');
  var author = config.packageJSON.author;
  var email = config.packageJSON.email;
  var name = config.packageJSON.name;
  var version = config.packageJSON.version;

  var root = xmlbuilder.create('dotnetnuke', {type: 'package'});
  var base = root.ele('packages').ele('package', {
    name: name,
    type: 'skin',
    version: version
  });

  base.ele('friendlyname', name);
  base.ele('version', version);
  base.ele('owner').ele('name', author).up().ele('email', email);

  base = base.ele('components').ele('component', {type: 'skin'});

  glob(path.join(config.dist, '**/*.*'), function (error, filelist) {
    filelist.forEach(function (filepath) {
      filepath = filepath.replace(config.dist, '');
      base.ele('skinfile')
        .ele('path', filepath.replace(/\//g, '\\'))
        .up()
        .ele('name', path.basename(filepath));
    });
    var xml = root.end({
      indent: '  ',
      pretty: true
    });
    fs.writeFileSync(xmlFileName, xml);

    gulp
      .src([
        xmlFileName,
        config.dist +'/**'
      ])
      // .pipe(rename(name))
      .pipe(zip(name +'-'+ version +'.zip'))
      .pipe(gulp.dest(path.join(config.__dirname, 'releases/')));
  });
};
