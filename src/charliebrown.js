var CharlieBrown = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('charliebrown');
};

CharlieBrown.prototype = Object.create(Dancer.prototype);
CharlieBrown.prototype.constructor = CharlieBrown;
