const userContainer = document.querySelector("#users");
const statusText = document.querySelector("#status");
// Function to render user data on the page
const renderUsers = (users) => {
  userContainer.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <p>${user.address.city}</p>
    `;

    userContainer.appendChild(card);
  });
};
//fetch user data from API and handle loading status and errors
const fetchUsers = async () => {
  statusText.textContent = "Loading users...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Check response.ok before trying to render the data.
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    statusText.textContent = "";

    renderUsers(users);

  } catch (error) {
    statusText.textContent = error.message;
  }
};

fetchUsers();