'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');
const jetpack = require('fs-jetpack');
const filename = __filename.split('/').pop().split('.').shift();
const lib = require('./' + filename);

const sampleJSFile = '"use strict";var hello = require("../../test");var Womp = require("test");console.log("Womp");';
const sampleJSRequires = ["var hello = require(\"../../test\")", "var Womp = require(\"test\")"];

const singleRequireString = 'var hello = require("../../test");';
const singleRequireExpected = ['var hello = require("../../test")', "hello", "../../test"];


describe('Read module tests: ', () => {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(jetpack, 'readAsync');
  });

  afterEach(function() {
    sandbox.restore();
  });


  describe('getContents', function () {
    const fn = lib[this.title];

    it('returns file contents', function () {
      const result = 'result',
        name = 'article.css';

      jetpack.readAsync.returns(Promise.resolve(result));

      fn(name).then(function (fileResult) {
        expect(fileResult).to.equal(result);
      });
    });
  });
});
