const params = new URLSearchParams(document.location.search);
const userName = params.get("name");

document.querySelector("#name").textContent = userName;
