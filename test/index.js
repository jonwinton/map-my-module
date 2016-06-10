'use strict';
const glob = require('glob'),
  chai = require('chai'),
  path = require('path'),
  tests = glob.sync([__dirname, '..', 'src', '**', '*.test.ts'].join(path.sep));

// defaults for chai
chai.config.showDiff = true;
chai.config.truncateThreshold = 0;

tests.forEach(function(test) {
  require(test);
});

// make sure the index file can be loaded at least
// _.each(tests, function (test) {
  // require(test);
// });