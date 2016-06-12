'use strict';

var read = require('./read');
var parse = require('./parse');
var path = require('path');

function hasRequires(contents) {
    parse.getRequires(contents);
}

/**
 * Tests if a file has a require statement and
 * then proceeds down a path depending on the
 * outcome of the test
 *
 * @param  {[type]} content [description]
 * @return {[type]}         [description]
 */
function testContents(directory, parent, content) {
    if (parse.hasRequires(content)) {
        return parse(content, directory, parent);
    } else {
        console.log('Womp');
        return null;
    }
}


/**
 * [mapFile description]
 * @return {[type]} [description]
 */
function mapFile(filePath, parent) {
    return read.getContents(filePath)
        .then(testContents.bind(null, path.dirname(filePath), parent))
}

module.exports = mapFile;
