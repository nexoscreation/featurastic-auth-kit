// /js/registration.js

function registerUser(event) {
  event.preventDefault();

  // Fetch user input
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Add your registration logic here
  // For example, you might want to send this data to the server for user creation

  // Display a message or redirect the user after successful registration
  // console.log('Registration successful! Redirecting to login page...');
  // window.location.href = 'login.html';
}

// Add event listener to the registration form
document.getElementById('registration-Form').addEventListener('submit', registerUser);



function registerUser() {

  // Fetch user input
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Add your registration logic here
  // For example, you might want to send this data to the server for user creation

  // Display a message or redirect the user after successful registration
  // console.log('Registration successful! Redirecting to login page...');
  // window.location.href = 'login.html';



  // Get values from form inputs
  const email = emailInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  // Simple validation: Ensure all fields are non-empty
  if (email === '' || username === '' || password === '') {
    alert('Please fill in all fields');
    return false;
  }

  // Additional validation logic
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (!isValidUsername(username)) {
    alert('Username must be at least 3 characters long');
    return false;
  }

  if (!isValidPassword(password)) {
    alert('Password must be at least 8 characters long');
    return false;
  }

  // Display success message (replace this with actual registration logic)
  alert('Registration successful!');

  // Optional: Reset form inputs
  emailInput.value = '';
  usernameInput.value = '';
  passwordInput.value = '';

  // Prevent form submission to the server
  return false;
}

// Helper functions for additional validation
function isValidEmail(email) {
  // Simple email validation using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidUsername(username) {
  // Ensure the username is at least 3 characters long
  return username.length >= 3;
}

function isValidPassword(password) {
  // Ensure the password is at least 8 characters long
  return password.length >= 8;
}