const menuBtn = document.querySelector(".menu__btn");
const nav = document.querySelector(".container__nav");
const cart = document.querySelector(".cart");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("toggle-menu");
  if (nav.classList.contains("toggle-menu")) {
    cart.classList.add("hide-cart");
  } else {
    cart.classList.remove("hide-cart");
  }
});
