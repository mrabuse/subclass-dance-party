var ZombieKid = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('zombiekid');
};

ZombieKid.prototype = Object.create(Dancer.prototype);
ZombieKid.prototype.constructor = ZombieKid;
ZombieKid.prototype.chase = function() {

};
