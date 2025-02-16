document.getElementById('loginForm').addEventListener('submit', function(event) {
    let isValid = true;

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (!username.value.trim()) {
        document.getElementById('usernameError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('usernameError').classList.add('hidden');
    }

    if (password.value.length < 6) {
        document.getElementById('passwordError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('passwordError').classList.add('hidden');
    }

    if (!isValid) {
        event.preventDefault();
    }
});