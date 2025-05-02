// DOM Element
const passwordField = document.getElementById("password");
const lengthField = document.getElementById("length");
const includeNumbers = document.getElementById("includeNumbers");
const includeSpecialChars = document.getElementById("includeSpecialChars");
const includeUppercase = document.getElementById("includeUppercase");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const copyAlert = document.getElementById("copyAlert");

// Character sets
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()-_=+[]{}|;:<>?";

// Funtion to generate a random password
function generatePassword() {
  const length = parseInt(lengthField.value);
  let character = lowercaseLetters;

  if (includeUppercase.checked) {
    character += uppercaseLetters;
  }
  if (includeNumbers.checked) {
    character += numbers;
  }
  if (includeSpecialChars.checked) {
    character += specialChars;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * character.length);
    password += character[randomIndex];
  }
  return password;
}

// Event listener
generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  passwordField.value = password;
});

// Coping to clipboard
copyBtn.addEventListener("click", () => {
  passwordField.select();
  document.execCommand("copy");

  // Show alert
  copyAlert.classList.add("show");

  // Hide alert after 3 seconds
  setTimeout(() => {
    copyAlert.classList.remove("show");
  }, 3000);
});
