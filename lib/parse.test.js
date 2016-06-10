'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;
const filename = __filename.split('/').pop().split('.').shift();
const lib = require('./' + filename);


const sampleJSFile = '"use strict";var hello = require("../../test");var Womp = require("test");console.log("Womp");';
const sampleJSRequires = ["var hello = require(\"../../test\")", "var Womp = require(\"test\")"];

const singleRequireString = 'var hello = require("../../test");';
const singleRequireExpected = ['var hello = require("../../test")', "hello", "../../test"];


describe('parse.js', () => {

  // Parse file
  describe('parseFile', function() {
    const fn = lib[this.title];

    it('should grab return an array of strings', () => {
      expect(fn(sampleJSFile)).to.deep.equal(sampleJSRequires);
    });
  });

  // Parse Require String
  describe('parseRequireString', function() {
    const fn = lib[this.title];

    it('should break a require string into a path and a name for the module', () => {
      var result = fn(singleRequireString);
      expect(result).to.have.deep.property('[1]', 'hello');
      expect(result).to.have.deep.property('[2]', '../../test');
    });
  });
});
