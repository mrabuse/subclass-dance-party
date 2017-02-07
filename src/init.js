$(document).ready(function() {
  window.dancers = [];

  $('body').on('click', '.dancer', function(event) {
      // Get the dancer id
      var dancer_id = $(this).data('dancer-id');
      // Get the object reference
      var obj = window.dancers[dancer_id];
      // Move the dancer back to place
      obj.backToPlace();
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(), //top
      $('body').width() * Math.random(), //left
      Math.random() * 1000, //timeout
      window.dancers.length //dancer_id
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.addGenericDancerButton').on('click', function(event) {
    var dancerMakerFunctionNames = ['HairToss', 'GreenDress', 'GenericDancer'];

    var arraySpot = Math.floor(Math.random() * dancerMakerFunctionNames.length);
    var dancerMakerFunction = window[dancerMakerFunctionNames[arraySpot]];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000,
      window.dancers.length
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


});
