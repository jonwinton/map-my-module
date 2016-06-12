'use strict';

const requireRegex = /(?:var|const|let)\s+(\w+)\s+=\s+require\(["|'](.*?)["|']\)(?:;|\s|.)/gi;
var Entry = require('./response/entry');
var File = require('./response/file');


/**
 * [parseFile description]
 * @param  {[type]} jsString [description]
 * @return {[type]}          [description]
 */
function parseFile(jsString) {
    return jsString.match(requireRegex)
        .map(function(require) {
            return require.trim();
        });
}

/**
 * [parseRequireString description]
 * @param  {[type]} requireString [description]
 * @return {[type]}               [description]
 */
function parseRequireString(requireString) {
    const parseRequire = /(?:var|const|let)\s+(\w+)\s+=\s+require\(["|']([^"\\]*(?:\\.[^"\\]*)*)["|']\)/gi;
    return parseRequire.exec(requireString);
}

/**
 * [stringToObject description]
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */
function stringToObject(workingDir, parent, string) {
    var parsedString = parseRequireString(string);
    var file = new File(parsedString, workingDir, parent);
    return file;
}

/**
 * Generates an array of entries based on the require
 * statements of a file
 * @param  {[type]} content [description]
 * @return {[type]}         [description]
 */
function getRequires(content, workingDir, parent) {
    var requires = parseFile(content);
    return requires.map(stringToObject.bind(null, workingDir, parent));
}

function parseEntryFile(dir, filePath) {
    return new Entry(dir, filePath)
}

/**
 * [hasRequires description]
 * @param  {[type]}  content [description]
 * @return {Boolean}         [description]
 */
function hasRequires(content) {
    return requireRegex.test(content);
}

module.exports = getRequires;
module.exports.parseFile = parseFile;
module.exports.parseRequireString = parseRequireString;
module.exports.hasRequires = hasRequires;
module.exports.parseEntryFile = parseEntryFile;
