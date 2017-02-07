var Dancer = function (top, left, timeBetweenSteps, dancer_id) {
  this.$node = $('<div class="dancer" dancer-id=' + dancer_id + '></div>');
  debugger;
  this.$node.data('dancer-id', dancer_id);
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  this.yOrigin = top;
  this.xOrigin = left;
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

Dancer.prototype.backToPlace = function () {
  this.$node.animate({
    'left': this.xOrigin,
    'top': this.yOrigin
  }, 2000);
};
