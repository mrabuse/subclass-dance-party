var Dancer = function (top, left, timeBetweenSteps) {
  this.image = 'img/genericPeanutDude.gif';
  this.$node = $('<img src=' + this.image + '></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.$node.animate({left: 20}, 2000);
};
