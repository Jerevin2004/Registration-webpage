document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // prevent form refresh

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  // Simple validation
  if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
    message.textContent = "All fields are required!";
    message.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    message.style.color = "red";
    return;
  }

  // If valid
  message.textContent = "Registration successful!";
  message.style.color = "green";

  // Clear form after success
  document.getElementById("registrationForm").reset();
});
