// Burger menu for mobile
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const nav_links = document.querySelector("#nav_links");
const logo = document.querySelector("header img");
const button = document.querySelector("#burger_button");

button.addEventListener("click", (event) => {
  header.classList.toggle("active");
  nav.classList.toggle("active");
  nav_links.classList.toggle("active");
  logo.classList.toggle("active");
});

// Signed/Not signed in
const link = document.querySelector("#login_link");

const logged = async () => {
  const res = await fetch("/me");

  return res.ok;
};

const isLoggedIn = await logged();

if (isLoggedIn) {
  link.textContent = "LOG OUT";
  link.setAttribute("href", "logout.html");
} else {
  link.textContent = "LOG IN/ABONNEMENT";
  link.setAttribute("href", "abonnement.html");
}
