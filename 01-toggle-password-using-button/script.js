// Get inputs from the DOM
var passwordInput = document.querySelector('#password');
var passwordButton = document.querySelector('#show-password');

// Listen for click event
passwordButton.addEventListener('click', function (event) {
  event.preventDefault();

  // If button is pressed
  if (event.target.getAttribute('aria-pressed') === 'false') {
    // Show password
    passwordInput.type = 'text';
    // Toggle aria-pressed attribute
    event.target.setAttribute('aria-pressed', true);
    // Update button text
    event.target.textContent = 'Hide Password';
  } else {
    // Hide password
    passwordInput.type = 'password';
    // Toggle aria-pressed attribute
    event.target.setAttribute('aria-pressed', false);
    // Update button text
    event.target.textContent = 'Show Password';
  }
});