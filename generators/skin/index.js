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
      name: 'skinName',
      message: 'Tell me how your skin should be called like',
      validate: function (string) {
        return string.replace(/\s+/, '').length > 0;
      }
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.props.skinName = _s.dasherize(props.skinName.toLowerCase());
      done();
    }.bind(this));
  },

  writing: {
    menu: function () {
      var config = {
        skinName: this.props.skinName
      };
      this.fs.copy(
        this.templatePath('_skin.ascx'),
        this.destinationPath(config.skinName +'.ascx')
      );
      this.fs.copy(
        this.templatePath('_doctype.xml'),
        this.destinationPath(config.skinName +'.doctype.xml')
      );
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
