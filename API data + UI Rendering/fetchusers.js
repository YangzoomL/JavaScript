const statusText = document.querySelector("#status"); // Get the status element to display loading status
const usersContainer = document.querySelector("#users"); // Get the container to display user information

const fetchUsers = async () => {
    try {
        statusText.textContent = "Loading..."; // Display loading status
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Fetch user data from API

        const users = await response.json(); // Parse the response as JSON

        usersContainer.innerHTML = ""; // Clear previous user data

        users.forEach((user) => {
            const card = document.createElement("div"); // Create a card for each user
            card.classList.add("user-card");
          
            card.innerHTML = `
                <h2>${user.name}</h2>
                <p>Email: ${user.email}</p>
                <p>Company name: ${user.company.name}</p>
            `; //  the card with user information

            usersContainer.appendChild(card); // Add the card to the container
        });

        statusText.textContent = ""; // Clear loading status
    }
    catch (error) {
        console.error(error); // Log any errors to the console
        statusText.textContent = 'Failed to load users'; // Display error message if fetching fails

    }
};

fetchUsers(); // Call the function to fetch and display users