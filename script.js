// Assignment Code

// Variables Characters
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Y",
  "Z",
];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "+",
];

var numberCharacters = ["0", "2", "3", "4", "5", "6", "7", "8", "9"];

function getPasswordOptions() {
  var length = parseInt(prompt("Amount of Characters?"), 10);
  if (Number.isNaN(length)) {
    alert("Password length must 8 and provided as a number!)");
    return null;
  }
  if (length < 8) {
    alert("Error, Length must be at least 8 characters!");
    return null;
  }
  var hasSpecialCharacters = confirm(
    "Click OK to confirm to include special characters."
  );
  var hasNumberCharacters = confirm(
    "Click OK to confirm to include number characters"
  );
  var hasLowerCaseCharacters = confirm(
    "Click OK to cofirm to include lowercase characters"
  );
  var hasUpperCaseCharacters = confirm(
    "Click OK to confirm to include uppercase characters"
  );

  if (
    hasSpecialCharacters === false &&
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false &&
    hasNumberCharacters === false
  ) {
    alert("Please select atleast one character type.");
    return null;
  }

  var passwordChoices = {
    length: length,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasNumberCharacters: hasNumberCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
  };

  return passwordChoices;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }

  if (options.hasNumberCharacters) {
    possibleCharacters = numberCharacters.concat(numberCharacters);
    guaranteedCharacters.push(getRandom(numberCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);
    //results.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join("");
}

// Before password is generated
//var alertText1 = "How many characters would you like your password to contain?";
//var choices = ["upper case", "lower case", "special characters"];
//var alertProvide = "Password length must be provided as a number.";
//var confirmText1 = "Okay to confirm including upper case.";
//var confirmText2 = "Okay to confirm including lower case.";
//var confirmText3 = "Okay to confirm including special characters";

//Dialogue Boxes
//alert(alertText1);
//alert(alertProvide);
//alert(alertChoices);

//if(confirm(confirmText1)){
// writePassword();
//}

//function writePassword(){
//var userInput = promt("You ")
//}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
