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
