var Ghost = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.hue = 0;
  this.colorIncrement = 10;
};

Ghost.prototype = Object.create(Snoopy.prototype);
Ghost.prototype.constructor = Ghost;
