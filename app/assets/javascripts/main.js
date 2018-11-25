$(document).ready(function() {
  var aRandomNumber = Math.floor((Math.random() * 100) + 1);
  var wins = 0;
  console.log("random num is " + aRandomNumber);
  //Guess Button
  $(".js-guess-button").click(function() {
    var userGuess = $('#user-guess').val();
    validateGuess(userGuess);
    $('.first-line').text("Your last guess was");
    $('.js-guess-text').text(userGuess);
  });

  //Clear Button
  $(".js-clear-button").click(function () {
    $('#user-guess').val("");
  });

  //Processes a Guess
  function validateGuess(guess) {
    if (isNumber(guess)){
      if (numberWithinRange(guess)) {
        processValidGuess(guess);
      } else {
        $('.result-line').text("That number is out of range");
      }
    } else {
      returnErrorMessage();
    }
  }

  //Tests if the response is a number
  function isNumber(response) {
    var response = parseInt(response);
    if (response) {
      return true;
    } else {
      return false;
    }
  }

  //Determines if a number is within a valid range
  function numberWithinRange(guess) {
    if (0 <= guess && guess<= 100){
      return true;
    } else {
      return false;
    }
  }

  //Determines if guess is correct, high, or low
  function processValidGuess(guess) {
    if (guess < aRandomNumber) {
      $('.result-line').text("That is too low");
    } else if (guess > aRandomNumber) {
      $('.result-line').text("That is too high");
    } else {
      wins += 1;
      $('.wins').text("Wins: " + wins);
      $('.result-line').text("BOOM!");
    }
  }

  //Returns an error message if the guess is not a valid response
  function returnErrorMessage() {
    $('.result-line').text("That is not a valid response")
  }

  // $('#user-guess').change(function () {
  //   if ($(this).val() === '') {
  //     $('.js-clear-button').prop('disabled', true);
  //   } else {
  //     $('.js-clear-button').prop('disabled', false);
  //   }
  // });
});
