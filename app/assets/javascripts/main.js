$(document).ready(function() {
  console.log("JavaScript is connected");
  $(".js-guess-button").click(function() {
      // event.preventDefault();
      alert( 'You clicked it!' );
      console.log ( 'clicked' );
  });
});

//create a var
//user types in a number
//checks to see if the number is between 1 to 100
//stores the number into the var
//determines if the number is higher or lower
