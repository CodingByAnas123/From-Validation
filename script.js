// Select the form and error message elements
const form = document.getElementById("registrationForm");
const errorMessage = document.getElementById("error_message");

// Add a submit event listener to the form
form.addEventListener("click", (e) => {
  e.preventDefault()

  // Get form input values
  const username = document.getElementById("username").value.trim()
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear previous error messages
  errorMessage.innerHTML = "";

  // Validation login
  if(username === "") {
    errorMessage.innerHTML = "Username is required!";
    return
  }

  if(!vaildateEmail(email)) {
    errorMessage.innerHTML = "invalid email address!";
    return
  }

  if(password.length < 6) {
    errorMessage.innerHTML = "Password must be at least 6 characters long!"
    return
  }

  // Success message
  alert("Form submitted successfully!")
})

// Email Validation function
function vaildateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email)
}