const getPosts = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts = await response.json();

        console.log(posts.slice(0, 5)); // Log the first 5 posts 
    }
    catch (error) {
        console.error("Error fetching posts:", error);
    }
};

getPosts();