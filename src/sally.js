var Sally = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sally');
};

Sally.prototype = Object.create(Dancer.prototype);
Sally.prototype.constructor = Sally;
