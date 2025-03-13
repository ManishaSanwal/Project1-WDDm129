//this page is created by Ravi Kumar
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        message.textContent = "";
    } else {
        message.textContent = "Invalid username or password";
    }
}