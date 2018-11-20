$(document).ready(function() {
  console.log("Hey there!");
  $(".guess-button").on ('click', (function() {
    alert("You clicked it!");
  });
});

//create a var
//user types in a number
//checks to see if the number is between 1 to 100
//stores the number into the var
//determines if the number is higher or lower
