var fs = require('fs');
var path = require('path');

var buildSystems = fs.readdirSync(path.join(__dirname, './sys-build'));

buildSystems.forEach(function (buildSystem) {
  try {
    require(buildSystem)();
  } catch (error) {
    throw new Error(error);
  }
});
