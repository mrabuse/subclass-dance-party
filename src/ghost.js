var Ghost = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  $node.addClass('ghost');
};

Ghost.prototype = Object.create(Snoopy.prototype);
Ghost.prototype.constructor = Ghost;
