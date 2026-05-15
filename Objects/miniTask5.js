const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Phone", price: 800, inStock: true },
  { name: "Tablet", price: 400, inStock: false }
];

products.forEach((product) => {
  const stockStatus = product.inStock ? "Available" : "Out of Stock";

  console.log(`${product.name}: $${product.price} - ${stockStatus}`);
});
