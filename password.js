// Assignment Code
var generateBtn = document.querySelector("#generate");
//var passwordDisplay = document.querySelector("#password")


var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialChar = "!@#$%^&*()-_=+";

var aLength = "";

// Write password to the #password input
//recursion - function calls itself call generate password from inside itself to restart it
// data structure for special char and letters -- arrays for them
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//need to create a generate password that will return 

function generatePassword() {
  var password = "";
  
  var pLength = prompt("Choose password length (8-128)");

  if (pLength < 8 || pLength > 128) {
    alert("Ivalid: Must be between 8 and 128 characters");
    generatePassword();
  }

  var lUpper = prompt("Do you want upper case characters? (Yes or No")

  if (lUpper === "Yes") {
    aLength += lettersUpper
  }

  var lLower = prompt("Do you want lower case characters? (Yes or No)")

  if (lLower === "Yes") {
    aLength += lettersLower
  }

  var spec = prompt("Do you want special characters? (Yes or No)")

  if (spec === "Yes") {
    aLength += specialChar
  }

  var numbers = prompt("Do you want numbers? (Yes or No)")

  if (numbers === "Yes") {
    aLength += number
  }
  

for (var i=0; i < pLength; i++){
  password += aLength.charAt( Math.floor(Math.random() * aLength.length));
}

return password;
}

