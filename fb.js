//this page is created by Ravi Kumar

let users = {}; // Stores registered users

function showSection(section) {
  document.querySelectorAll(".container, .main-content").forEach(div => div.style.display = "none");
  document.getElementById(section).style.display = "block";
}

// Signup Function
function signup() {
  let name = document.getElementById("signup-name").value;
  let username = document.getElementById("signup-username").value;
  let password = document.getElementById("signup-password").value;

  if (!name || !username || !password) {
    alert("All fields are required!");
    return;
  }

  if (users[username]) {
    alert("Username already exists! Try logging in.");
    return;
  }

  users[username] = { name, password };
  alert("Account created successfully! Please log in.");
  showSection("signin");
}