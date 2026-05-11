const product= [
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
const inStockProducts = product.filter((item) => {
    return item.inStock;
});


inStockProducts.forEach((item) => {
    console.log(`Product: ${item.name}, Price: $${item.price}`);
});

