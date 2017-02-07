var Woodstock = function(top, left, timeBetweenSteps) {
  Woodstock.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('woodstock');
  this.degree = 0;
  this.degreeIncrement = 10;
};

Woodstock.prototype = Object.create(Dancer.prototype);
Woodstock.prototype.constructor = Woodstock;
Woodstock.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var rotation = {
    'transform': 'rotate(' + this.degree + 'deg)'
  };

  this.degree = this.degree + this.degreeIncrement;
  this.$node.css(rotation);
};