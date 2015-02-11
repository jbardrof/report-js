var should = require('chai').should(),
  reporter = require('../index');

describe('exports', function () {
  it('should expose the reporting engine', function () {
    reporter.engine.should.be.a('function');
  })
});
