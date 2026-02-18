
let usernameInput= document.getElementById("username");
let passwordInput = document.getElementById("password");
let messageDiv = document.getElementById("error-message");

console.log(usernameInput)
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

        let usernameValue = usernameInput.value;
        let passwordValue = passwordInput.value;

        let correctUsername = "admin";
        let correctPassword = "1234";
        if (usernameValue === correctUsername && passwordValue === correctPassword) {
                messageDiv.textContent = "Login Successful";
        }
        else {
                messageDiv.textContent = "Invalid Credentials";
}

            console.log(passwordValue);
            console.log(usernameValue);
});

