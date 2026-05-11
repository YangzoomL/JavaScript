const title= document.querySelector("#main-title");

title.textContent= "Welcome to HTML DOM";


const content = document.querySelector ("#profile");

content.innerHTML=`
    <p> Name: Yangzoom </p>
    <p> Email: yangzoom@example.com </p>
    <p> City: Elmhurst </p>
 `;

 const obj={
    state: "New York",
    country: "USA"
 }

 const moreContent = document.querySelector("#more-info");

 moreContent.innerHTML= `
    <p> State: ${obj.state} </p>
    <p> Country: ${obj.country} </p>
 `;