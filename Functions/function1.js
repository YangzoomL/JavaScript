function isAdult(age){
    if (age>= 18){
        return "Adult";
    } else {
        return "Minor";
    }
}
console.log(isAdult(20)); // Output: Adult
console.log(isAdult(15)); // Output: Minor