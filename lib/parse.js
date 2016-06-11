'use strict';

// const requireRegex = /(?:var|const|let)\s+(\w+)\s+=\s+require\(["|']([^"\\]*(?:\\.[^"\\]*)*)["|']\)/gi;
const requireRegex = /(?:var|const|let)\s+(\w+)\s+=\s+require\(["|'](.*?)["|']\)(?:;|\s)/gi;

module.exports.parseFile = function parseFile(jsString) {
  return jsString.match(requireRegex)
          .map(function(require) {
            return require.trim();
          });
}

module.exports.parseRequireString = function parseRequireString(requireString) {
  return requireRegex.exec(requireString);
}
