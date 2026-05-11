const user={
    name: "John",
    age: 28,
    hobbies: ["traveling", "fitness", "movies"],
    address:{
        city: "Dallas",
        state: "TX"
    }
};
console.log(`${user.name} is ${user.age} years old.`);
console.log("First hobby:", user.hobbies[0]);
console.log("City:", user.address.city);
