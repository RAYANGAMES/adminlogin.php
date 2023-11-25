function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate username and password length
    if (username.length < 5 || password.length < 5) {
        alert("Username and password must be at least 5 characters long.");
        return;
    }

    // Perform your login logic here (this is a simple alert for demonstration)
    alert("FAILED: USERNAME OR PASSWORD IS INCORRECT");
}

function signUp() {
    alert("Registration for admin will open on 3rd Jan 2024.");
}

function forgotPassword() {
    var userEmail = prompt("Enter your email:");
    if (userEmail) {
        alert("Email is not registered.");
    }
}
