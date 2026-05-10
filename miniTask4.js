const users = [
  { name: "Alex", active: true },
  { name: "Maya", active: false },
  { name: "Sam", active: true },
  { name: "Nina", active: false }
];

const activeUserNames = users
  .filter((user) => user.active) // Step 1: Filter active users
  .map((user) => user.name); // Step 2: Extract names

console.log("Active Users:", activeUserNames);
