// Get info from the URL and change the values in the HTML
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

// Form values
const email = document.querySelector("#email");
const email2 = document.querySelector("#email2");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// Validation
const validate = () => {
  // Emails matching
  if (email.value !== email2.value) {
    email2.setCustomValidity("Emails must be the same!");
  } else {
    email2.setCustomValidity("");
  }

  // Password length
  if (password.value.length < 8) {
    password.setCustomValidity("Password is too short. Minimum 8 characters!");
  } else {
    password.setCustomValidity("");
  }

  // Passwords matching
  if (password.value !== password2.value) {
    password2.setCustomValidity("Password must be the same!");
  } else {
    password2.setCustomValidity("");
  }
};

[email, email2, password, password2].forEach((selector) => {
  selector.addEventListener("input", validate);
});



