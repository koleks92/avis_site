const message = document.querySelector("#seconds");

// Logout fetch
async function logout() {
  const res = await fetch("/logout", {
    method: "POST",
  });

  return res.ok;
}

logout();

// Count down
let seconds = 3;
message.textContent = seconds;

const timer = setInterval(async () => {
  seconds--;

  if (seconds > 0) {
    message.textContent = seconds;
  } else {
    clearInterval(timer);
    window.location.replace("/");
  }
}, 1000);
