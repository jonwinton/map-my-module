'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;
const filename = __filename.split('/').pop().split('.').shift();
const lib = require('./' + filename);

const mocks = {
  semicolonFile: '"use strict";var hello = require("../../test");var Womp = require("test");console.log("Womp");',
  semicolonResponse: ["var hello = require(\"../../test\");", "var Womp = require(\"test\");"],
  noSemicolonFile: '"use strict" var hello = require("../../test") var Womp = require("test") console.log("Womp")',
  noSemicolonResponse: ["var hello = require(\"../../test\")", "var Womp = require(\"test\")"],
  singleRequireString: 'var hello = require("../../test");',
  singleRequireExpected: ['var hello = require("../../test")', "hello", "../../test"]
};

describe('parse.js', () => {

  // Parse file
  describe('parseFile', function() {
    const fn = lib[this.title];

    it('should return an array of strings of require statements if there are semicolons', () => {
      expect(fn(mocks.semicolonFile)).to.deep.equal(mocks.semicolonResponse);
    });

    it('should return an array of strings of require statements if there aren\'t semicolons', () => {
      expect(fn(mocks.noSemicolonFile)).to.deep.equal(mocks.noSemicolonResponse);
    });
  });

  // Parse Require String
  describe('parseRequireString', function() {
    const fn = lib[this.title];

    it('should break a require string into a path and a name for the module', () => {
      var result = fn(mocks.singleRequireString);
      expect(result).to.have.deep.property('[1]', 'hello');
      expect(result).to.have.deep.property('[2]', '../../test');
    });
  });
});
