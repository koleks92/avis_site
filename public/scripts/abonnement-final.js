const params = new URLSearchParams(document.location.search);
const userName = params.get("name");
const error = params.get("error");

if (userName) {
  document.querySelector("#name").textContent = userName;
}

if (error) {
  document.querySelector("#first_title").textContent = "Ups!";
  if (error === "email") {
    document.querySelector("#second_title").textContent =
      "Email is already in our database";
  } else {
    document.querySelector("#second_title").textContent =
      "Server error, please try again later!";
  }
}

if (error == "email") {
}
