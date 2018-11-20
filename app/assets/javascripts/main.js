$(document).ready(function() {
  console.log("JavaScript is connected");
  var aRandomNumber = Math.floor((Math.random() * 100) + 1);
  //var userGuess = null;
  $(".js-guess-button, button").click(function() {

    var userGuess = $('#user-guess').val();
    //console.log(userGuess);
    //$('#user-guess').text("");
    $('.first-line').text("Your last guess was:")
    $('.guess-text').text(userGuess);
  });
});

//create a var
//user types in a number
//checks to see if the number is between 1 to 100
//stores the number into the var
//determines if the number is higher or lower
