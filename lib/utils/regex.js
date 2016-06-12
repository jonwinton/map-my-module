'use strict';

module.exports = {
  requireTest: /(?:var|const|let)\s+(\w+)\s+=\s+require\(["|'](.*?)["|']\)(?:;|\s|.)/gi,
  parseRequire: '(?:var|const|let)\s+(\w+)\s+=\s+require\([\"|\']([^"\\]*(?:\\.[^"\\]*)*)[\"|\']\)'
};
