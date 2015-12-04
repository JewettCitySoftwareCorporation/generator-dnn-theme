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
      'Adding a stylus task to your ' + chalk.bold.red('Dnn ') + chalk.bold.blue('theme') + '!'
    ));
    done();
  },

  writing: {
    tasks: function () {
      var config = {
        themeName: this.config.get('themeName')
      };
      this.fs.copyTpl(
        this.templatePath('stylus'),
        this.destinationPath('stylus'),
        config
      );
      this.fs.copy(
        this.templatePath('tasks'),
        this.destinationPath('tasks')
      );
    }
  },

  install: function (done) {
    this.bowerInstall(['nostrap'], {
      saveDev: true
    });
    this.npmInstall([
      'gulp-stylus',
      'ride-css',
      'stylus'
    ], {
      saveDev: true
    });
  }
});
