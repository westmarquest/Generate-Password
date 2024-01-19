// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var pwLength;

  // Use a loop to prompt for password length until a valid input is provided
  while (true) {
    // Prompt user for length of password
    pwLength = prompt("Enter desired length of password");

    // Validate password length
    if (pwLength === null) {
      // User clicked "cancel", exit the function
      return;
    }

    pwLength = parseInt(pwLength);

    if (pwLength >= 8 && pwLength <= 128) {
      // Valid input, break out of the loop
      break;
    } else {
      // Alert if the input is invalid and continue the loop
      alert(
        "Password length must be between 8 and 128 characters. Please click 'OK' to try again."
      );
    }
  }

  // Confirm whether or not to include lowercase, uppercase, numeric, and special characters
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that the user has selected at least one type of character
  if (
    !(includeLowercase || includeUppercase || includeNumeric || includeSpecial)
  ) {
    alert("Please select at least one type of character.");
    return;
  }

  // Logic to generate password
  var password = generateRandomPassword(
    pwLength,
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecial
  );

  // Display the generated password
  alert("Generated Password: " + password);

  return password;
}

function generateRandomPassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumeric,
  includeSpecial
) {
  var characterSet = "";

  if (includeLowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) characterSet += "0123456789";
  if (includeSpecial) characterSet += "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}
