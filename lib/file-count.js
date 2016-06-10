'use strict';

const jetpack = require('fs-jetpack');

function filterOutDotFiles(array) {
  return array.filter(function(item) {
    return item.name.indexOf('.') !== 0;
  });
}

function removeNodeModules(array) {
  return array.filter(function(item) {
    return item.name !== 'node_modules';
  });
}


function filterTreeDown(array) {
  return removeNodeModules(filterOutDotFiles(array));
}

function getFileCount(directory) {
  var tree = jetpack.inspectTree(directory);
  return filterTreeDown(tree.children);
}
