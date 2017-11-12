const assert = require("assert")


describe('WatchBird', () => {
  const Entity = require('./WatchBird')

  it('Not triggered', () => Entity.getRiskWarning('poop')
    .then(res => assert.ok(!res)))
  it('Triggered', () => Entity.getRiskWarning('Gimme your credit card number')
    .then(res => assert.ok(res)))
})
