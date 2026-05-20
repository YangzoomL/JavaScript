const getUser = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const user = await response.json();

        console.log("Name: ", user.name);
        console.log("Email: ", user.email);
        console.log("City: ", user.address.city);
    }
    catch (error) {
        console.error(error.message);

    }
};

getUser();
    