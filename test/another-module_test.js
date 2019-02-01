const assert = require('chai').assert;
const anotherModule = require('../src/js/another-module');
describe('AnotherModule', function() {
  it('Another module should return hello', function() {
    assert.equal(anotherModule(), 'hello');
  });
});
