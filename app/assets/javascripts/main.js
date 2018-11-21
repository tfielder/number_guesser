$(document).ready(function() {
  console.log("JavaScript is connected");
  var aRandomNumber = Math.floor((Math.random() * 100) + 1);
  console.log("random number is " + aRandomNumber);

  //Guess Button
  $(".js-guess-button").click(function() {
    var userGuess = $('#user-guess').val();
    
    if (userGuess < aRandomNumber) {
      $('.result-line').text("That is too low");
    } else if (userGuess > aRandomNumber) {
      $('.result-line').text("That is too high");
    } else {
      $('.result-line').text("BOOM!");
    }

    $('.first-line').text("Your last guess was");
    $('.guess-text').text(userGuess);
  });

  //Clear Button
  $(".js-clear-button").click(function () {
    $('#user-guess').val("");
  });

});
