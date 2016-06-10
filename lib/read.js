'use strict';

var jetpack = require('fs-jetpack');

function getContents(filePath) {
  return jetpack.readAsync(filePath)
}

module.exports.getContents = getContents;
