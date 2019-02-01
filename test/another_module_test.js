const assert = require('chai').assert;
const sayHello = require('../src/js/another_module').sayHello;
describe('AnotherModule', function() {
  it('Another module should return hello', function() {
    let result = sayHello();
    assert.equal(result, 'hello');
  });
});
