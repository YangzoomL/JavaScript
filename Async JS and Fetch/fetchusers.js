const getUsers = async () => {
  // fetch data from the specified URL and wait for the response to complete.
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // convert the response to JSON format and wait for it to complete.
  const users = await response.json();

  console.log(users);
};

getUsers();
