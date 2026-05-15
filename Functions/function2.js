function getDiscount(price){
    if (price>= 100){
        return "You will get 20% discount"

    }else if (price>= 50){
        return "You will get 10% discount"
    } else {
        return "No discount"
    }
}

console.log(getDiscount(120)); 
console.log(getDiscount(70));
console.log(getDiscount(30));