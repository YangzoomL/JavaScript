const input=document.querySelector("#input");
const preview=document.querySelector("#preview");

input.addEventListener("input", () =>{
    preview.textContent = `Hello, ${input.value}!`;
});