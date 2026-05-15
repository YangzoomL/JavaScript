const cities = ["New York", "Los Angeles", "Houston"];

const cityList = document.querySelector("#city-list");

cities.forEach(city => {
    const listItem = document.createElement("li");
    listItem.textContent = city;
    cityList.appendChild(listItem);
});