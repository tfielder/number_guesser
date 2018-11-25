$(document).ready(function() {
  var aRandomNumber = 0;
  var wins = 0;
  var min = 0;
  var max = 0;

  //Max and Min button
  $(".js-min-max-button").click(function() {
    var user_min = parseInt($('#min-number').val());
    var user_max = parseInt($('#max-number').val());
    if ((isNumber(user_min)) && (isNumber(user_max)) && (user_min < user_max)) {
      min = user_min;
      max = user_max;
      generateRandomNumber(min, max);
      $(".max-min").hide();
    } else {
      $('.min-max-verify').text("One of those values doesn't seem to work, try again.");
    }
  });

  //generates a random number
  function generateRandomNumber(mini, maxi) {
    aRandomNumber = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    console.log("random num is " + aRandomNumber);
  }

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

  //Reset button
  $(".js-reset-button").click(function () {
    $('#user-guess').val("");
    $('.result-line').text("");
    $('.first-line').text("Page reset");
    generateRandomNumber(min, max);
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
      $('.js-reset-button').trigger('click');
    }
  }

  //Returns an error message if the guess is not a valid response
  function returnErrorMessage() {
    $('.result-line').text("That is not a valid response");
  }

  // $('#user-guess').change(function () {
  //   if ($(this).val() === '') {
  //     $('.js-clear-button').prop('disabled', true);
  //   } else {
  //     $('.js-clear-button').prop('disabled', false);
  //   }
  // });
});
