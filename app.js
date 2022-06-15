const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const btnAdd = document.querySelector(".plus");
const btnMin = document.querySelector(".minus");
let iteamsNumber = document.querySelector(".number-input");
let number = 0;

iteamsNumber.addEventListener("keypress", function (e) {
  e.preventDefault();
});

btnAdd.addEventListener("click", function (e) {
  number++;
  iteamsNumber.value = number;
});

btnMin.addEventListener("click", function (e) {
  if (number > 0) {
    number--;
    iteamsNumber.value = number;
  }
});

const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const sideBar = document.querySelector(".side-bar");
menu.addEventListener("click", function (e) {
  sideBar.style.display = "block";
});

const closeMenu = document.querySelector(".close");
closeMenu.addEventListener("click", function (e) {
  sideBar.style.display = "none";
});

const cart = document.querySelector(".cart");
const shop = document.querySelector(".shop");

cart.addEventListener("click", function (e) {
  if (shop.style.display == "block") {
    shop.style.display = "none";
  } else {
    shop.style.display = "block";
  }
});

const button = document.querySelector(".button");
const navCart = document.querySelector(".nav-img");
const span = document.querySelector(".span");

button.addEventListener("click", function (e) {
  if (iteamsNumber.value > 0) {
    span.style.display = "block";
    span.textContent = iteamsNumber.value;
  } else {
    span.style.display = "none";
  }
});

const btnShop = document.querySelector(".button");
const text = document.querySelector(".text h2").textContent;
const price = document.querySelector(".price-first").textContent;
const shopElems = document.querySelector(".shop--elems");

btnShop.addEventListener("click", function (e) {
  const numbers = iteamsNumber.value;
  const total = parseInt(price) * numbers;
  const iteam = `
  <div class="iteam-container">
        <div class="iteams">
          <img class="iteam-img"
            src="./ecommerce-product-page-main/images/image-product-1-thumbnail.jpg"
            alt=""
          />
          <div class="iteam--text">
            <p class="text-one">${text}</p>
            <p class="text-two">
            ${price}.00 x ${number} <span class="iteam--span">$${total}.00</span>
            </p>
          </div class="div-trash">
          <img class="trash" onclick="trash()"
            src="./ecommerce-product-page-main/images/trash.png"
            alt=""
          />
        </div>
        <button class="iteam--button">Checkout</button>
      </div>`;
  shopElems.innerHTML = iteam;
});

function trash() {
  shopElems.innerHTML = `<p>Your cart is empty.</p>`;
  span.style.display = "none";
}
