describe('Woodstock', function() {

  var woodStock, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    woodStock = new Woodstock(10, 20, timeBetweenSteps);
  });
  it('should have a step function that makes it rotate', function() {
    sinon.spy(woodStock, 'step');
    expect(woodStock.degree).to.be.equal(0);
    clock.tick(timeBetweenSteps);

    expect(woodStock.degree).to.be.equal(10);

    clock.tick(timeBetweenSteps);
    expect(woodStock.degree).to.be.equal(20);
  });

});
