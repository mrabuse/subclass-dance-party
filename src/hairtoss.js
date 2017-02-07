var HairToss = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hairtoss');
};

HairToss.prototype = Object.create(Dancer.prototype);
HairToss.prototype.constructor = HairToss;
