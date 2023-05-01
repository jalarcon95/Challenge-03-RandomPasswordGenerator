var length = 8;
var choiceArr = [];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '/', '<', '>', '?'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); 

  if (correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

function generatePassword() {

  var password = "";
  for(var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  length = parseInt(prompt("How many characters do ytou want your password to be? (8 - 128 characters"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Character lengh has to be a numer between 8 - 128. Please try again");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCase);

  }

  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCase);
  
  }

  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(number);

  }

  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialChar);
  
  }

  return true;
}

// 1. Prompt the user for the password criteria
//    a. password length 8-128
//    b. lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password on the page.