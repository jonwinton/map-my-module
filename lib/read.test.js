'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');
const filename = __filename.split('/').pop().split('.').shift();
const lib = require('../../dist/lib/' + filename);


const sampleJSFile = '"use strict";var hello = require("../../test");var Womp = require("test");console.log("Womp");';
const sampleJSRequires = ["var hello = require(\"../../test\")", "var Womp = require(\"test\")"];

const singleRequireString = 'var hello = require("../../test");';
const singleRequireExpected = ['var hello = require("../../test")', "hello", "../../test"];


describe('TypeScript tests: ', () => {

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });


  // Parse file
  describe('parseFile', function() {
    const fn = lib[this.title];

    it('should grab return an array of strings', () => {
      expect(fn(sampleJSFile)).to.deep.equal(sampleJSRequires);
    });
  });
});