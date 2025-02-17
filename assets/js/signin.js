document.getElementById('signinForm').addEventListener('submit', function(event) {
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phone = document.getElementById('phone');

    // Name Validation
    if (!name.value.trim()) {
        document.getElementById('nameError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('nameError').classList.add('hidden');
    }

    // Email Validation
    if (!email.value.includes('@') || !email.value.includes('.')) {
        document.getElementById('emailError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('emailError').classList.add('hidden');
    }

    // Password Validation (must be at least 6 characters)
    if (password.value.length < 6) {
        document.getElementById('passwordError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('passwordError').classList.add('hidden');
    }

    // Phone Validation (if entered, must be 10 digits)
    if (phone.value && !/^[0-9]{10}$/.test(phone.value)) {
        document.getElementById('phoneError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('phoneError').classList.add('hidden');
    }

    // Final validation and redirection
    if (!isValid) {
        event.preventDefault();
    } else {
        if (name.value.toLowerCase() === "user" && password.value === "password") {
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password.");
            event.preventDefault();
        }
    }
});

document.getElementById('pass').addEventListener('click', function() {
    const password = document.getElementById('password');
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});