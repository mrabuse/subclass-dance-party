var Linus = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('linus');
};

Linus.prototype = Object.create(Dancer.prototype);
Linus.prototype.constructor = Linus;
