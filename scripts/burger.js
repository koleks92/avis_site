// Burger menu for mobile
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const logo = document.querySelector("header img");
const button = document.querySelector("#burger_button");

button.addEventListener("click", (event) => {
  header.classList.toggle("active");
  nav.classList.toggle("active");
  logo.classList.toggle("active");
});
