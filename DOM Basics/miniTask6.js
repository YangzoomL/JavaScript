const user = {
  name: "Sophia",
  role: "Backend and Frontend Student",
  city: "NYC"
};

document.querySelector("#welcome").textContent = `Welcome, ${user.name}`;
document.querySelector("#description").textContent = "You are learning DOM basics.";

document.querySelector("#profile").innerHTML = `
  <h2>${user.name}</h2>
  <p>Role: ${user.role}</p>
  <p>City: ${user.city}</p>
`;
