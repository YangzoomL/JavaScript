const form = document.querySelector("#signup-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const output = document.querySelector("#signup-output");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = name.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if (nameValue === "") {
        output.textContent = "Name is required.";
        return;
    }

    if (!emailValue.includes("@")) {
        output.textContent = "Please enter a valid email.";
        return;
    }
    
    if (passwordValue.length < 8) {
        output.textContent = "Password must be at least 8 characters long.";
        return;
    }

    output.textContent = `Signup successful! Welcome, ${nameValue}.`;

    // Clear the form fields after successful submission
    name.value = "";
    email.value = "";
    password.value = "";
});