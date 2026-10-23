const modal = document.querySelector("#modal");

const logged = async () => {
  const res = await fetch("/me");

  return res.ok;
};

const isLoggedIn = await logged();


if (isLoggedIn) {
    modal.classList.add("hidden");
} else {
    modal.classList.remove("hidden");
}