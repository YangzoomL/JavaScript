const userContainer = document.querySelector("#users");
const statusText = document.querySelector("#status");
const postsContainer = document.querySelector("#posts");

// loading
const showLoading = () => {
    statusText.textContent = "Loading users...";
};

//show error
const showError = () => {
    statusText.textContent = "Failed to load";
};

// Clear status

const clearStatus = () => {
    statusText.textContent = "";
};

//fetch user
const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error("Failed to fetch users");
        
    }
    // return the response as JSON
    return response.json();
};

//fetch posts
const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
        
    }
    // return the response as JSON
    return response.json();
};


// Function to render user data on the page
const renderUsers = (users) => {
  userContainer.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
    `;

    userContainer.appendChild(card);
  });
};


//render posts
const renderPosts = (posts) => {
  postsContainer.innerHTML = "";


  posts.slice(0, 5).forEach((post) => {
    const card = document.createElement("div");

    card.classList.add("post-card");

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    postsContainer.appendChild(card);
  });
};

// Load user data and post data
const loadData = async() => {
  showLoading();

  try{
    //only wait for the fetchUsers function to complete before rendering the users
    const users = await fetchUsers();

    //only render the users after the fetchUsers function has completed and returned the user data
    renderUsers(users);

    const posts = await fetchPosts();
    
    renderPosts(posts);


    clearStatus();
  } catch (error) {
    showError();
  }
};

// Initialize the app by loading users when the page is ready
const init = () => {
  loadData();
};

init();