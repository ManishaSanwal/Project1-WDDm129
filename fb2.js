document.addEventListener("DOMContentLoaded", function () {
    // Function to validate email format
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to validate phone number (only digits, 10-15 characters)
    function isValidPhone(phone) {
        return /^[0-9]{10,15}$/.test(phone);
    }

    // Function to validate password (minimum 6 characters)
    function isValidPassword(password) {
        return password.length >= 6;
    }

    // Handle Sign Up
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById("signup-name").value.trim();
            const username = document.getElementById("signup-username").value.trim();
            const password = document.getElementById("signup-password").value.trim();
            const confirmPassword = document.getElementById("signup-confirm-password").value.trim();

            // Full Name Validation
            if (name.length < 3) {
                alert("Full Name must be at least 3 characters long.");
                return;
            }

            // Email or Phone Validation
            if (!isValidEmail(username) && !isValidPhone(username)) {
                alert("Please enter a valid Email or Phone number.");
                return;
            }

            // Password Validation
            if (!isValidPassword(password)) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            // Confirm Password Validation
            if (password !== confirmPassword) {
                alert("Passwords do not match! Please re-enter.");
                return;
            }

            // If all validations pass
            alert("Account Created Successfully! Please log in.");
            document.getElementById("signup").style.display = "none"; // Hide sign-up form
            document.getElementById("signin").style.display = "block"; // Show sign-in form
            signupForm.reset(); // Reset form fields
        });
    }
});
