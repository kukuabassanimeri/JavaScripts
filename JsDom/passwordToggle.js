const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
    //* Toggle the visibility of the password field text
    password.classList.toggle("bi-eye");
});

//* Prevent form submission
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
});