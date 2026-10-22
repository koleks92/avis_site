const form = document.querySelector("#login");
const message = document.querySelector("#message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const res = await fetch("/login", {
    method: "POST",
    body: new URLSearchParams(new FormData(form)),
  });

  const data = await res.json();

  if (data.ok) {
    message.textContent = "Ok";
  } else if (data.error == "Password") {
    message.textContent = "Wrong password";
  } else if (data.error == "User") {
    message.textContent = "Cannot find given email";
  } else {
    message.textContent = "Server error";
  }
});
