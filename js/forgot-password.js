// /js/forgot-password.js
function validateEmail(email) {
// Basic email validation (you can replace this with a more robust validation)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

function submitForgotPassword(event) {

// Collect the entered email
const emailInput = document.getElementById('email');
const email = emailInput.value.trim();

// Validate the email
if (!validateEmail(email)) {
alert('Please enter a valid email address.');
return;
}

// Perform additional logic (e.g., send a reset link to the provided email)

// Add your forgot password logic here (e.g., send email, update database, etc.)

// Inform the user about the next steps (replace this with your desired action)
alert(`A password reset link has been sent to ${email}. Check your email inbox.`);

// Optionally, you can redirect the user to a confirmation page
// window.location.href = 'confirmation.html';

// Clear the email input field after submission
emailInput.value = '';
}
