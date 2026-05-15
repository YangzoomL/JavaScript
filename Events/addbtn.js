const productInput = document.querySelector("#input2");
const addItem= document.querySelector("#add-item");
const productList = document.querySelector("#product_list");

addItem.addEventListener("click", () =>{

    const itemText = productInput.value; // Get the value from the input field

    if (itemText===""){ // Check if the input is empty
        return;
    }
    const li = document.createElement("li"); //create a new li element


    li.textContent= itemText; //set the text of the li to the input value

    productList.appendChild(li); //add the new li to the product list

    productInput.value = ""; //clear the input field
});


