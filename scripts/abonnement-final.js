// Get info from the URL and change the values in the HTML
const params = new URLSearchParams(document.location.search);
const customerName = params.get("fornavn");

// Change customer name
const nameSpan = document.querySelector("#name");
nameSpan.textContent = customerName;