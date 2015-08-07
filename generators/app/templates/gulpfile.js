var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var buildersPath = path.join(__dirname, './tasks');
var buildSystems = fs.readdirSync(buildersPath);
var buildSystemsIndex = [];

buildSystems.forEach(function (buildSystem) {
  var modulePath = path.join(buildersPath, buildSystem);
  try {
    // getting the module
    var buildModule = require(path.join(buildersPath, buildSystem));
    // pushing task name to the default task
    buildSystemsIndex.push(buildModule.name);
    // registering the task
    gulp.task(buildModule.name, buildModule.build({
      __dirname: __dirname
    }));
  } catch (error) {
    throw new Error(error);
  }
});

// registering the default task
gulp.task('default', buildSystemsIndex, function () {
  console.log(buildSystemsIndex.length +' Task(s) executed: '+ buildSystemsIndex.join());
});
