const arr= [
    {
        name: "iPad",
        price: 799,
        inStock: true

    }, 
    {
        name: "iPhone",
        price: 1299,
        inStock: true,

    },
    {
        name: "MacBook Pro",
        price: 2199,
        inStock: false
    }
];

console.log(`Product: ${arr[0].name}, Price: $${arr[0].price}, In Stock: ${arr[0].inStock}`);
console.log(`Product: ${arr[1].name}, Price: $${arr[1].price}, In Stock: ${arr[1].inStock}`);
console.log(`Product: ${arr[2].name}, Price: $${arr[2].price}, In Stock: ${arr[2].inStock}`);
