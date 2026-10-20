// Get info from the URL
const params = new URLSearchParams(document.location.search);
const abonnement = params.get("abo");

const nameAbo = document.querySelector("#abonnement_name");
const normalPrice = document.querySelector("#normal_price");
const rabatPrice = document.querySelector("#rabat_price");
const totalPrice = document.querySelector("#total_price");

if (abonnement === "digital") {
  nameAbo.innerHTML = "Digital";
  normalPrice.innerHTML = "210,00";
  rabatPrice.innerHTML = "210,00";
  totalPrice.innerHTML = "0,00";
} else if (abonnement === "digitalweekend") {
  nameAbo.innerHTML = "Digital og weekend";
  normalPrice.innerHTML = "315,00";
  rabatPrice.innerHTML = "315,00";
  totalPrice.innerHTML = "0,00";
} else if (abonnement === "fuldt") {
  nameAbo.innerHTML = "Fuldt abonnement";
  normalPrice.innerHTML = "440,00";
  rabatPrice.innerHTML = "440,00";
  totalPrice.innerHTML = "0,00";
} else if (abonnement === "student") {
  nameAbo.innerHTML = "Student";
  normalPrice.innerHTML = "99,00";
  rabatPrice.innerHTML = "99,00";
  totalPrice.innerHTML = "0,00";
}
