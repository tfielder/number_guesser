$(document).ready(function() {
  console.log("JavaScript is connected");
  var aRandomNumber = Math.floor((Math.random() * 100) + 1);
  //var userGuess = null;
  $(".js-guess-button, button").click(function() {
    console.log("The random number" + aRandomNumber);
    var userGuess = $('#user-guess').val();
    if (userGuess < aRandomNumber) {
      $('.result-line').text("That is too low");
    } else if (userGuess > aRandomNumber) {
      $('.result-line').text("That is too high");
    } else {
      $('.result-line').text("BOOM!");
    }
    //$('#user-guess').text("");
    $('.first-line').text("Your last guess was")
    $('.guess-text').text(userGuess);
  });
});
