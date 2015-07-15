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
      'Welcome to the prime ' + chalk.bold.red('Dnn ') + chalk.bold.blue('theme') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'themeName',
      message: 'Tell me how your theme should be named',
      validate: function (string) {
        return string.replace(/\s+/, '').length > 0;
      }
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.props.themeName = _s.camelize(props.themeName);
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var config = {
        themeName: this.props.themeName
      };
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        config
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        config
      );
      this.fs.copy(
        this.templatePath('_skin.ascx'),
        this.destinationPath(_s.dasherize(this.props.themeName) +'.ascx')
      );
      this.fs.copy(
        this.templatePath('images'),
        this.destinationPath('images')
      );
      this.fs.copy(
        this.templatePath('js'),
        this.destinationPath('js')
      );
      this.fs.copy(
        this.templatePath('nav-primary'),
        this.destinationPath('nav-primary')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
