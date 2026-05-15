const form= document.querySelector('#myForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const output = document.querySelector('#output');

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // You can now access the form data and perform validation or other actions
    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email.includes("@")) {
        output.textContent = "Please enter a valid email.";
        return;
    }

    if (password ===""){
        output.textContent = "Password is required.";
        return;
    }

    output.textContent = "Login successful!";
});
//search form
const form2 = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const result = document.querySelector("#result");

form2.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = searchInput.value;

    result.textContent = `Searching for: ${userInput}`;
});
//feedback form
const form3 = document.querySelector("#feedback-form");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");
const feedbackOutput = document.querySelector("#feedback-output");

form3.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const message = messageInput.value;
    if (message.length<10){
        feedbackOutput.textContent = "Message must be at least 10 characters long.";
        return;
    }

    if(name ===""){
        feedbackOutput.textContent = "Name is required.";
        return;
    }


    feedbackOutput.textContent = `Thank you for the feedback, ${name}. Your message: ${message}`;
});
