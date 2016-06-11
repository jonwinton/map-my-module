'use strict';

var fs = require('fs');
var path = require('path');

function commandLoader(program) {

  var commands = {};
  var loadPath = path.dirname(__filename);

  // Loop though command files
  fs.readdirSync(loadPath).filter(function (filename) {
    return (/\.js$/.test(filename) && filename !== 'index.js' && filename.indexOf('.test.') === -1);
  }).forEach(function (filename) {
    var name = filename.substr(0, filename.lastIndexOf('.'));

    // Require command
    var command = require(path.join(loadPath, filename));

    // Initialize command
    commands[name] = command(program);
  });

  return commands;
}

module.exports = commandLoader;
