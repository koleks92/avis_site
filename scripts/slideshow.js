const img = document.querySelector("#img_slideshow");
const buttonLeft = document.querySelector("#button_left");
const buttonRight = document.querySelector("#button_right");

let imgIndex = 1;

// Next image
const next = () => {
  if (imgIndex === 4) {
    img.setAttribute("src", img.getAttribute("src").replace(imgIndex, "1"));
    imgIndex = 1;
  } else {
    img.setAttribute(
      "src",
      img.getAttribute("src").replace(imgIndex, imgIndex + 1),
    );
    imgIndex++;
  }
};

// Previous image
const previous = () => {
  if (imgIndex === 1) {
    img.setAttribute("src", img.getAttribute("src").replace(imgIndex, "4"));
    imgIndex = 4;
  } else {
    img.setAttribute(
      "src",
      img.getAttribute("src").replace(imgIndex, imgIndex - 1),
    );
    imgIndex--;
  }
};

// Buttons
buttonLeft.addEventListener("click", () => previous());
buttonRight.addEventListener("click", () => next());

// Click and slide
let move = false;
let initialX = 0;

img.addEventListener("pointerdown", (e) => {
  // Allow movement and save the x poistion
  move = true;
  initialX = e.clientX;
});

img.addEventListener("pointermove", (e) => {
  // If not pressed, dont allow
  if (!move) return;

  // Calculate how far
  let movedX = e.clientX - initialX;

  if (movedX < -25) {
    previous();
    move = false;
  }

  if (movedX > 25) {
    next();
    move = false;
  }
});

img.addEventListener("pointerup", (e) => {
  // Stop/Do not allow movement
  move = false;
});
