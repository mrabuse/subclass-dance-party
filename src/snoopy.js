var Snoopy = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  $node.addClass('snoopy');
};

Snoopy.prototype = Object.create(Dancer.prototype);
Snoopy.prototype.constructor = Snoopy;

Snoopy.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
