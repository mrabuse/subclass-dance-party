var GenericDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('genericdancer');
};

GenericDancer.prototype = Object.create(Dancer.prototype);
GenericDancer.prototype.constructor = GenericDancer;
