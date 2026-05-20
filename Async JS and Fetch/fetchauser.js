const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        
        const users = await response.json();
        console.log(users.name);
        console.log(users.email);
        console.log(users.address.city);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

getUsers();