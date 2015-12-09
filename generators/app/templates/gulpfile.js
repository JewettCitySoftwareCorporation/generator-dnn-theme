'use strict';

var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var buildersPath = path.join(__dirname, './tasks');
var buildSystems = fs.readdirSync(buildersPath);
var buildSystemsIndex = [];
var buildSystemsIndexLast = [];

var distFolder = path.join(__dirname, './dist/');

buildSystems.forEach(function (buildSystem) {
  var modulePath = path.join(buildersPath, buildSystem);
  try {
    // getting the module
    var buildModule = require(path.join(buildersPath, buildSystem));
    // pushing task name to the default task
    if (!buildModule.exclude) {
      if (!buildModule.priority) buildSystemsIndex.push(buildModule.name);
      if (buildModule.priority && buildModule.priority === 'last') buildSystemsIndexLast.push(buildModule.name);
    }

    // registering the task
    gulp.task(buildModule.name, buildModule.build({
      __dirname: __dirname,
      dist: distFolder,
      packageJSON: require('./package.json')
    }));
  } catch (error) {
    throw new Error(error);
  }
});

var registeredTasks = buildSystemsIndex.concat(buildSystemsIndexLast);

// registering the default task
gulp.task('default', registeredTasks, function () {
  console.log(buildSystemsIndex.length +' Task(s) executed: '+ registeredTasks.join(', '));
});
