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
      'Adding a DNN Razor menu to your wonderful '+ chalk.bold.red('Dnn ') + chalk.bold.blue('theme') +'!'
    ));

    var prompts = [{
      type: 'rawList',
      name: 'menuStyle',
      message: 'Tell what kind of menu you\'d love to have',
      choices: [{
        name: 'Standard multilevel nav',
        value: 'menu'
      }, {
        name: 'Standard single level breadcrumb',
        value: 'breadcrumb'
      }],
      default: 0
    }, {
      type: 'input',
      name: 'menuName',
      message: 'Tell me how your menu should be called like',
      validate: function (string) {
        return string.replace(/\s+/, '').length > 0;
      }
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.props.menuName = _s.dasherize(props.menuName.toLowerCase());
      done();
    }.bind(this));
  },

  writing: {
    menu: function () {
      var menuFolder = 'dist/'+ this.props.menuName +'/';
      var config = {
        menuName: this.props.menuName
      };

      this.fs.copyTpl(
        this.templatePath(this.props.menuStyle +'.cshtml'),
        this.destinationPath(menuFolder + config.menuName +'.cshtml'),
        config
      );
      this.fs.copyTpl(
        this.templatePath('menudef.xml'),
        this.destinationPath(menuFolder + config.menuName +'-menudef.xml'),
        config
      );
    }
  },

  install: function () {
    this.log(chalk.bold.blue('Wundabah!'));
  }
});
