document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Perform login validation (you can customize this part)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the username and password are correct
    if (username === "beti" && password === "1234"
    ) {
      // Redirect to the main.html page
      window.location.href = "main.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });