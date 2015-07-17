'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('dnn theme:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({
        themeName: 'test theme'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      '.editorconfig',
      '.jshintrc',
      'js/theme.js',
      'nav-primary/nav-primary.cshtml',
      'nav-primary/nav-primary-menudef.xml',
      'test-theme.ascx'
    ]);
  });
});

describe('dnn theme:menu', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/menu'))
      .withOptions({ skipInstall: true })
      .withPrompts({
        menuName: 'my wonderful menu'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'my-wonderful-menu/my-wonderful-menu.cshtml',
      'my-wonderful-menu/my-wonderful-menu-menudef.xml'
    ]);
  });
});

describe('dnn theme:skin', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/skin'))
      .withOptions({ skipInstall: true })
      .withPrompts({
        skinName: 'my wonderful skin'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'my-wonderful-skin.ascx',
      'my-wonderful-skin.doctype.xml'
    ]);
  });
});
