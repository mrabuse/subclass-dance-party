var GreenDress = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('greendress');
};

GreenDress.prototype = Object.create(Dancer.prototype);
GreenDress.prototype.constructor = GreenDress;
