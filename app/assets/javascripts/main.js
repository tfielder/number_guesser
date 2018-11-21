$(document).ready(function() {
  console.log("JavaScript is connected");
  var aRandomNumber = Math.floor((Math.random() * 100) + 1);
  console.log("random number is " + aRandomNumber);

  //Guess Button
  $(".js-guess-button").click(function() {
    var userGuess = $('#user-guess').val();
    if (isNumber(userGuess)){
      processGuess(userGuess);
    } else {
      returnErrorMessage();
    }
    $('.first-line').text("Your last guess was");
    $('.js-guess-text').text(userGuess);
  });

  //Clear Button
  $(".js-clear-button").click(function () {
    $('#user-guess').val("");
  });

  //Test for is a number
  function isNumber(response) {
    var response = parseInt(response);
    if (response) {
      return true;
    } else {
      return false;
    }
  }

  //Determines if guess is correct, high, or low
  function processGuess(guess) {
    if (guess < aRandomNumber) {
      $('.result-line').text("That is too low");
    } else if (guess > aRandomNumber) {
      $('.result-line').text("That is too high");
    } else {
      $('.result-line').text("BOOM!");
    }
  }

  //Returns an error message if the guess is not a valid response
  function returnErrorMessage() {
    var message = "That is not a valid response";
    $('.result-line').text(message);
  }

});
