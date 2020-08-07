// Get inputs from the DOM
var passwordInput = document.querySelector('#password');
var passwordCheckbox = document.querySelector('#show-password');

// Listen for click event
passwordCheckbox.addEventListener('click', function (event) {
  // If checkbox is checked...
  if (event.target.checked) {
    // Show password
    passwordInput.type = 'text';
  } else {
    // Hide password
    passwordInput.type = 'password';
  }
});