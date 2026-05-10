const validateSignup = (name, age) => {
  if (!name) {
    return "Name is required.";
  }

  if (age < 18) {
    return "User must be at least 18.";
  }

  return "Signup successful.";
};

console.log(validateSignup("Alex", 22));
console.log(validateSignup("", 22));
console.log(validateSignup("Sam", 15));