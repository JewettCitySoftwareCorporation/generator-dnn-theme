'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Adding a lesscss task to your ' + chalk.bold.red('Dnn ') + chalk.bold.blue('theme') + '!'
    ));

    done();
  },

  writing: {
    tasks: function () {
      this.fs.copy(
        this.templatePath('less'),
        this.destinationPath('less')
      );
      this.fs.copy(
        this.templatePath('tasks'),
        this.destinationPath('tasks')
      );
    }
  },

  install: function (done) {
    // ugh
    this.bowerInstall(['bootstrap'], {
      saveDev: true
    });
    this.npmInstall(['gulp-less'], {
      saveDev: true
    });
  }
});
