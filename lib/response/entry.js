'use strict';

var path = require('path');

function Entry(dir, file) {
  // The directory we're in
  this.directory = dir;
  // Get the name of the file
  this.fileName = file.split('/').pop();
  // The full path to the module
  this.fullPath = path.resolve(dir, file)
  // Requires to be populated later
  this.requires = [];
}

module.exports = Entry;
