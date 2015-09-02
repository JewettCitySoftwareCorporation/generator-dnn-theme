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
      'dist/js/theme.js',
      'dist/nav-primary/nav-primary.cshtml',
      'dist/nav-primary/nav-primary-menudef.xml',
      'dist/test-theme.ascx',
      'dist/test-theme.doctype.xml',
      'tasks/autoprefixer.js',
      'tasks/zip.js'
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
      'dist/my-wonderful-menu/my-wonderful-menu.cshtml',
      'dist/my-wonderful-menu/my-wonderful-menu-menudef.xml'
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
      'dist/my-wonderful-skin.ascx',
      'dist/my-wonderful-skin.doctype.xml'
    ]);
  });
});

describe('dnn theme:task jade', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/task-jade'))
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'jade/skin.jade',
      'tasks/jade.js'
    ]);
  });
});

describe('dnn theme:task less css', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/task-less'))
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'less/skin.less',
      'tasks/less.js'
    ]);
  });
});

describe('dnn theme:task stylus', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/task-stylus'))
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'stylus/skin.styl',
      'tasks/stylus.js'
    ]);
  });
});
