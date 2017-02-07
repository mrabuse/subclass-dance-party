var RainbowDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.hue = 0;
  this.colorIncrement = 10;
};

RainbowDancer.prototype = Object.create(BlinkyDancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;
RainbowDancer.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
  var rainbowColors = {
    'border-color': 'hsl(' + this.hue + ',100%, 50%)'
  };

  this.hue = (this.hue + this.colorIncrement);
  this.$node.css(rainbowColors);
};
