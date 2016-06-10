'use strict';

const requireRegex = /(?:var|const|let)\s+(\w+)\s+=\s+require\(["|']([^"\\]*(?:\\.[^"\\]*)*)["|']\)/gi;

module.exports.parseFile = function parseFile(jsString) {
  return jsString.match(requireRegex);
}

module.exports.parseRequireString = function parseRequireString(requireString) {
  return requireRegex.exec(requireString);
}
