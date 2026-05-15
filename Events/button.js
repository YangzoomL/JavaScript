const button= document.querySelector("#change");
const heading= document.querySelector("#heading");

button.addEventListener("click", () =>{
    heading.textContent = "Button Clicked!";
});