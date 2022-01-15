const assert = require('assert');
const { sum } = require('./functions');


describe('sum function', function() {
  it('3+8=11', function() {
    assert.equal(11,sum(3,8));
  }),

  it('5+0=5', function() {
    assert.equal(5,sum(5,0));
  }),

  it('73+129=202', function() {
    assert.equal(202,sum(73,129));
  })
}) 