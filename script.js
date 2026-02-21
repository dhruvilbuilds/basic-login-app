// Select Elements
let form = document.querySelector("form");
let loginButton = document.querySelector("button");

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");

// Constants
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let correctPassword = "1234";

// Initial State
loginButton.disabled = true;

// Function to Check Inputs
function checkInputs() {
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    if (emailPattern.test(emailValue) && passwordValue === correctPassword) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

// Email Validation
emailInput.addEventListener("input", function () {
    let emailValue = emailInput.value;

    if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Invalid email format";
    } else {
        emailError.textContent = "";
    }

    checkInputs();
});

// Password Validation
passwordInput.addEventListener("input", function () {
    let passwordValue = passwordInput.value;

    if (passwordValue === "") {
        passwordError.textContent = "Password cannot be empty";
    } else {
        passwordError.textContent = "";
    }

    checkInputs();
});

// Form Submit
form.addEventListener("submit", function (event) {
    event.preventDefault();

    window.location.href = "success.html";
});
