var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('square');
  this.degree = 0;
  this.degreeIncrement = 10;
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var rotation = {
    'transform': 'rotate(' + this.degree + 'deg)'
  };

  this.degree = this.degree + 10;
  this.$node.css(rotation);
};
