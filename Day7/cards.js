const cards=[
    {
        name: "Owala",
        price: 34.99,
        inStock: true
    },
    {
        name: "Stanley",
        price: 35.00,
        inStock: true
    }
];

const cardContainer = document.querySelector("#card");

cards.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("product-card");
    
    cardElement.innerHTML = `
        <h2>${card.name}</h2>
        <p>Price: $${card.price}</p>
        <p>${card.inStock ? "In Stock" : "Out of Stock"}</p>
    `;
    
    cardContainer.appendChild(cardElement);
});
