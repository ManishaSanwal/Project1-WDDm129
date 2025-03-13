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

  // Login Function
  function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (users[username] && users[username].password === password) {
      alert("Login successful! Welcome, " + users[username].name);
      document.getElementById("display-name").textContent = users[username].name;
      showSection("main");
    } else {
      alert("Invalid username or password!");
    }
  }

   // Logout Function
   function logout() {
    alert("You have been logged out!");
    showSection("signin");
  }

   // Contact Form Function
   document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("contact-name").value;
    let email = document.getElementById("contact-email").value;
    let message = document.getElementById("contact-message").value;

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    alert("Thank you, " + name + "! Your message has been sent.");
    document.getElementById("contact-form").reset();
  });

  // Mouse Events for Buttons
  document.querySelectorAll(".button, .friend-button, .btn").forEach(button => {
    button.addEventListener("mouseover", () => button.style.background = "#007bff");
    button.addEventListener("mouseout", () => button.style.background = "");
    button.addEventListener("mousedown", () => button.textContent = "Clicked!");
    button.addEventListener("mouseup", () => button.textContent = "Done!");
  });

  // Double-click event for posts
  document.querySelectorAll(".post").forEach(post => {
    post.addEventListener("dblclick", () => alert("You double-clicked on a post!"));
  });
  