// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "-", "_", "=", "+", ",", ".", "<", ">"];

var length = "";

document.querySelector("#generate").addEventListener("click", function() {
  var userClick = prompt("Please choose a password between 8-128 characters")

})


// Write password to the #password input
//recursion - function calls itself call generate password from inside itself to restart it
// data structure for special char and letters -- arrays for them
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}  
// Add event listener to generate button

//need to create a generate password that will return 