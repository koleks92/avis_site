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

// Validation
const form = document.querySelector("#abonnement");

// regex
const regxp_email =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const regxp_tel = /^(?:\+45)?\s?\d{8}$/;

const validate = () => {
  const {
    email,
    email2,
    password,
    password2,
    fornavn,
    efternavn,
    telefon,
    adresse,
    post,
    by,
  } = form;

  // Email
  email.setCustomValidity(
    !regxp_email.test(email.value) ? "Email must be valid!" : "",
  );

  email2.setCustomValidity(
    email.value !== email2.value ? "Emails must be the same!" : "",
  );

  // Password
  password.setCustomValidity(
    password.value.length < 8
      ? "Password is too short. Minimum 8 characters!"
      : "",
  );

  password2.setCustomValidity(
    password.value !== password2.value ? "Passwords must be the same!" : "",
  );

  // Names
  fornavn.setCustomValidity(fornavn.value === "" ? "Missing fornavn!" : "");
  efternavn.setCustomValidity(
    efternavn.value === "" ? "Missing efternavn!" : "",
  );

  // Phone
  telefon.setCustomValidity(
    telefon.value === ""
      ? "Missing telefon number!"
      : !regxp_tel.test(telefon.value)
        ? "Phone number must be valid!"
        : "",
  );

  // Addres
  adresse.setCustomValidity(adresse.value === "" ? "Missing adresse!" : "");

  // Post number
  const postNumber = Number(post.value);
  post.setCustomValidity(
    post.value === ""
      ? "Missing post!"
      : postNumber < 1000 || postNumber > 9999
        ? "Post number should be between 1000 and 9999"
        : "",
  );

  // City by
  by.setCustomValidity(by.value === "" ? "Missing by!" : "");
};

form.addEventListener("input", validate);

// More info

// form.addEventListener("submit", validate);
// If using 'submit' remeber preventDefault() !
// insted setCustomValidity should be reportValidity or just message in the html
