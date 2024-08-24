document.addEventListener( 'DOMContentLoaded', function() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var submitBtn = document.getElementById('submitBtn');

   var nameError = document.getElementById('nameError');
   var emailError = document.getElementById('emailError');
   var passwordError = document.getElementById('passwordError');

    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name cannot be empty';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        var emailPattern =/^[^@\s]+@[^@\s]+\.[^@\s]+$/; 
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Invalid email format';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }

    function validateForm() {
        var isNameValid = validateName();
        var isEmailValid = validateEmail();
        var isPasswordValid = validatePassword();

        submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid);
    }

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if (!submitBtn.disabled) {
            alert('Form submitted successfully!');
        }
    });
});

