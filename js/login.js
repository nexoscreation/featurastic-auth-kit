function validateLoginForm() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  // Basic validation for username (non-empty)
  if (usernameInput.value.trim() === '') {
    alert('Please enter your username.');
    return false;
  }

  // Additional validation for username (minimum length)
  if (usernameInput.value.trim().length < 5) {
    alert('Username must be at least 5 characters long.');
    return false;
  }

  // Basic validation for password (non-empty)
  if (passwordInput.value.trim() === '') {
    alert('Please enter your password.');
    return false;
  }

  // Additional validation for password (minimum length)
  if (passwordInput.value.trim().length < 8) {
    alert('Password must be at least 8 characters long.');
    return false;
  }

  // Additional validation logic can be added here

  return true; // Form is valid
}

function submitLoginForm(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Validate the form
  if (validateLoginForm()) {
    // If the form is valid, you can perform additional actions here
    // For example, sending the data to the server via AJAX or navigating to another page
    alert('Logged in successfully!'); // Replace this with your desired action
  }
}
