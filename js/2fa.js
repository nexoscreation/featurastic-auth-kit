// /js/main.js

function restrictInputToDigits(event) {
const input = event.target;
input.value = input.value.replace(/\D/g, ''); // Allow only digits

// Move to the next input field if the current input has a value
if (input.value && input.nextElementSibling) {
input.nextElementSibling.focus();
}
}

function submitVerification(event) {
event.preventDefault();

// Collect the entered verification code
const verificationCode =
document.getElementById('verificationCode1').value +
document.getElementById('verificationCode2').value +
document.getElementById('verificationCode3').value +
document.getElementById('verificationCode4').value +
document.getElementById('verificationCode5').value +
document.getElementById('verificationCode6').value;

// Replace this with the expected or stored verification code
const expectedCode = "123456"; // Example code, replace with your actual logic

// Perform verification logic
if (verificationCode === expectedCode) {
alert('Verification successful!');
// Add logic for successful verification (e.g., redirect or display success message)
} else {
alert('Verification failed. Please try again.');
// Display an error message to the user
}

// Clear the input fields after verification attempt
document.getElementById('verificationCode1').value = '';
document.getElementById('verificationCode2').value = '';
document.getElementById('verificationCode3').value = '';
document.getElementById('verificationCode4').value = '';
document.getElementById('verificationCode5').value = '';
document.getElementById('verificationCode6').value = '';
}

function resendCode() {
// Add logic to resend the verification code (e.g., send a new code via SMS)
console.log('Resending verification code...');
// Optionally, provide a confirmation to the user
alert('A new verification code has been sent.');
}
