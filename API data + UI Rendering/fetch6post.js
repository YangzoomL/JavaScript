const statusText = document.querySelector("#status"); // Get the status element to display loading status
const postsContainer = document.querySelector("#posts"); // Get the container to display user information

const getPosts = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts = await response.json();
        // Get only first 6 posts
        const firstSixPosts = posts.slice(0, 6);

        firstSixPosts.forEach((post) => {
            const card = document.createElement("div"); // Create a card for each user
            card.classList.add("user-card");
                card.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;

            postsContainer.appendChild(card);

        });


    }
    catch (error) {
       statusText.textContent = error.message; // Display error message if fetching fails
    }
};

getPosts();