'use strict';

var path = require('path');
var parse = require('../lib/parse');
var read = require('../lib/read');
var mapFile = require('../lib/map');
var Entry = require('../lib/response/entry');
var responseObject = {};

/**
 * Sets the working directory, establishes entry point
 * for all mapping, reads the contents of the entry file
 * and finds all its requires.
 *
 * @param  {Object} opts Command line data passed in via `commander`
 */
function beginMap(opts) {
  //Get the current directory
  var cwd = process.cwd();
  // Make the entry object
  responseObject.files = parse.parseEntryFile(cwd, opts.file);
  // Read the file & parse them
  read.getContents(responseObject.files.fullPath)
    .then(parseEntryRequires);
}

/**
 * [parseEntryRequires description]
 * @param  {[type]} contents [description]
 * @return {[type]}          [description]
 */
function parseEntryRequires(content) {
  // Content, the working directory, and the parent
  var requires = parse(content, responseObject.files.directory, responseObject.files.fileName);
  responseObject.files.requires = requires;
  crawlRequires(responseObject.files.requires);
}

function crawlRequires(requires, parent) {
  var parsePromise = requires.map(file => {
    return mapFile(file.fullPath, file.fileName);
  });


  Promise.all(parsePromise)
    .then(test => {
      console.log(test);
    })
}

function map(program) {
    return program
        .command('map')
        .description('Map a module')
        .option('-f, --file <path>', 'pass in a file to begin mapping from')
        .action(beginMap);
}

module.exports = map;
