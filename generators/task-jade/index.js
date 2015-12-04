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
      'Adding a jade task to your ' + chalk.bold.red('Dnn ') + chalk.bold.blue('theme') + '!'
    ));
    done();
  },

  writing: {
    tasks: function () {
      this.config.set('jade', true);
      this.fs.copy(
        this.templatePath('jade'),
        this.destinationPath('jade')
      );
      this.fs.copy(
        this.templatePath('tasks'),
        this.destinationPath('tasks')
      );
    }
  },

  install: function (done) {
    this.npmInstall(['jade', 'gulp-jade', 'gulp-rename'], {
      saveDev: true
    });
  }
});
