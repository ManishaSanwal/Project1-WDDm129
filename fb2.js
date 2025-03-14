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

            // Confirm Account Creation
            if (confirm("Account Created Successfully! Click OK to proceed to Login.")) {
                document.getElementById("signup").style.display = "none"; // Hide sign-up form
                document.getElementById("signin").style.display = "block"; // Show sign-in form
                signupForm.reset(); // Reset form fields
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to validate email format
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to validate phone number (only digits, 10-15 characters)
    function isValidPhone(phone) {
        return /^[0-9]{10,15}$/.test(phone);
    }

    // Handle Login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const username = document.getElementById("login-username").value.trim();
            const password = document.getElementById("login-password").value.trim();

            // Email or Phone Validation
            if (!isValidEmail(username) && !isValidPhone(username)) {
                alert("Please enter a valid Email or Phone number.");
                return;
            }

            // Password Validation
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            // Simulated login success (replace with actual authentication)
            alert("Login Successful!");
            
            // Store the username in localStorage to display on the main page
            localStorage.setItem("loggedInUser", username);

            // Redirect to Main Page
            document.getElementById("signin").style.display = "none"; // Hide login
            document.getElementById("main").style.display = "block"; // Show main content
            
            // Display username on the main page
            document.getElementById("user-name").innerText = username;

            loginForm.reset(); // Reset form fields
        });
    }

    // Display stored username on the main page if user is logged in
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
        document.getElementById("user-name").innerText = storedUser;
    }
});

// Function to show Sign Up form and hide Login form
function showSignup() {
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

// Function to show Login form and hide Sign Up form
function showLogin() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.display = "block";
}

// Function to toggle Contact Form visibility
function toggleContactForm() {
    const form = document.getElementById("contact-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
}

// Function to validate email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    // Validation checks
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Confirmation before submitting
    if (!confirm("Are you sure you want to send this message?")) {
        return;
    }

    // Simulate sending message
    document.getElementById("contact-response").innerText = "Message sent successfully!";
    
    // Hide form after submission
    document.getElementById("contact-form").reset();
    document.getElementById("contact-form").style.display = "none";
});

// Function to handle logout
function logout() {
    // Hide the main content
    document.getElementById("main").style.display = "none"; // Hide main content
    
    // Show the sign-in form
    document.getElementById("signin").classList.add("active"); // Make sure it is active
    document.getElementById("signup").style.display = "none"; // Hide signup form
    document.getElementById("signin").style.display = "block"; // Ensure sign in is visible
}

// Function to post content from think1 element
function postContent() {
    const think1 = document.getElementById("think1");
    const postsContainer = document.getElementById("posts");
    
    // Get the value of the input
    const content = think1.value.trim();

    // Check if content is not empty
    if (content) {
        // Create a new div for the post
        const postDiv = document.createElement("div");
        postDiv.className = "post border p-2 mb-2"; // Add classes for styling
        postDiv.textContent = content; // Set the text content of the post
        
        // Append the new post to the posts container
        postsContainer.appendChild(postDiv);
        
        // Clear the input after posting
        think1.value = "";
    } else {
        alert("Please enter some content before posting.");
    }
}


// Function to validate the password
function validatePassword(password) {
    const uppercasePattern = /[A-Z]/; // At least one uppercase letter
    const lowercasePattern = /[a-z]/; // At least one lowercase letter
    const numberPattern = /\d/; // At least one number
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

    // Check if password meets all conditions
    if (password.length < 8 || 
        !uppercasePattern.test(password) || 
        !lowercasePattern.test(password) || 
        !numberPattern.test(password) || 
        !specialCharPattern.test(password)) {
        return false; // Password does not meet criteria
    }
    return true; // Password is valid
}

// Function to handle signup
function handleSignup(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const password = document.getElementById("signup-password").value;
    
    // Validate the password
    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character(@,. etc.).");
        return; // Stop the signup process
    }
    
    // If validation passes, you can proceed with the signup logic (e.g., create account)
    // You can also include additional code to handle signup here

    alert("Signup successful!"); // Placeholder for successful signup
}

