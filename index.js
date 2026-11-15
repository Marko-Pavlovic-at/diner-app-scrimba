import { menuArray } from "./data.js";
const dinerBody = document.getElementById("diner-body");

console.log("test");
console.log(menuArray);

function render() {
  dinerBody.innerHTML = menuArray
    .map((item) => {
      return `
    <li>
    <img src = "${item.path}">
    <div class = "item-text">
    <h2>${item.name}</h2>
    <p class = "ing-text">${item.ingredients}</p>
    <p>${item.price}$</p>

    </div>
        <button class="add-btn">+</button>
    </li>
    `;
    })
    .join("");
}

render();
