import { menuArray } from "./data.js";
const ordered = [];
const dinerBody = document.getElementById("diner-body");
console.log(menuArray);

dinerBody.addEventListener("click", function (e) {
  if (e.target.dataset.id) {
    console.log("clicked", e.target.dataset.id);
    const addedID = Number(e.target.dataset.id);
    const addedObj = menuArray.find((item) => item.id === addedID);
    ordered.push(addedObj);
    console.log(ordered);

    renderOrder();
  }
});

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
        <button data-id="${item.id}" class="add-btn">+</button>
    </li>
    `;
    })
    .join("");
}
const order = document.createElement("section");
order.className = "order-section";
const totalPriceTextEl = document.createElement("p");
const totalPriceEl = document.createElement("p");
totalPriceTextEl.textContent = `Total price:`;
let totalPrice = 0; //ordered.reduce((total, current) => total + current.price, 0);
const totalPriceDiv = document.createElement("div");
totalPriceDiv.className = "total-box";
const completeOrderBtn = document.createElement("button");
completeOrderBtn.className = "complete-btn";
completeOrderBtn.textContent = "Complete order";
function renderOrder() {
  order.innerHTML = `<h2>Your Order</h2>`;
  ordered.forEach((item) => {
    order.innerHTML += `
    <div class = "order-box">
    <div class = "left-content">
    <p>${item.name}</p>
    <button class ="rem-btn">Remove</button>
    </div>
    <p>${item.price}$</p>
    </div>
    `;
  });
  totalPrice = ordered.reduce((total, current) => total + current.price, 0);
  totalPriceEl.textContent = totalPrice + "$";
  totalPriceDiv.append(totalPriceTextEl, totalPriceEl);

  dinerBody.append(order, totalPriceDiv, completeOrderBtn);
}

render();
