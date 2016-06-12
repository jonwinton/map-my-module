'use strict';

var path = require('path');

function appendSuffix(string) {
  return string + '.js';
}

/**
 * File constructor
 *
 * @param {[type]} requireObj [description]
 * @param {[type]} workingDir [description]
 * @param {[type]} parent     [description]
 */
function File(requireObj, workingDir, parent) {
  debugger;
  // The full string
  this.string = requireObj[0];
  // The variable it's assigned to
  this.variable = requireObj[1];
  // Path to the module
  this.requirePath = requireObj[2];
  // The full path to the object
  this.fullPath = this.resolveModule(workingDir);
  // Get the name of the file
  this.fileName = this.fullPath.split('/').pop();
  // The parent module
  this.parent = parent;
  // Requires to be populated later
  this.requires = [];
}

File.prototype.resolveModule = function(workingDir) {
  return appendSuffix(path.resolve(workingDir, this.requirePath));
}

module.exports = File;
